import Swal from "sweetalert2";
import { EventBus } from "@/utils/event-bus";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      // newInfo: this.container,
      // websock: null,
      timer: "",
      loadingState: false,
      containerRunningSelected: 'location',
      locationOptions: [
        { text: '本地', value: 'location', disabled: false },
        { text: '云端', value: 'cloud', disabled: false }
      ],
      selectedHost: null,
    };
  },
  computed: {
    // 主机列表
    ...mapState("hosts", ["hosts"]),

    // 当前用户信息
    ...mapState("auth", ["currentUser"]),

    // 是否是管理员
    isAdmin() {
      return this.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN");
    },

    // 是否是用户自己创建的容器
    isMine() {
      if(!this.currentUser || !this.currentUser.sub) return false;
      return this.newInfo.uid === this.currentUser.sub;
    },

    // 是否在用户本机
    isUserHost () {
      return this.newInfo.user_host;
    },

    // 本地/远程按钮控制其他按钮显示
    isLocation() {
      if(this.containerRunningSelected === 'cloud') return false;
      return true;
    },

    // 是否可以选择运行位置
    canSelectLocation () {
      return this.newInfo.status === "New";
    },

    // 是否可以选择JupyterLab运行
    canSelectCloudRunning () {
      const status =
        this.newInfo && this.newInfo.status
          ? this.newInfo.status
          : this.container.status;
      switch (status) {
        case "Port_Forwarding_Success":
          return true;
        case "Running":
          return true;
        default:
          return false;
        }
    },

    // 显示重新启动按钮
    isRestartShow () {
      const status =
        this.newInfo && this.newInfo.status
          ? this.newInfo.status
          : this.container.status;
      if(status === 'Paused') {
        return true;
      } else {
        return false;
      }
    },

    // 是否已删除容器
    isDel() {
      if (this.container.status === "Deleted") return true;
      return false;
    },

    // 容器使用镜像
    image() {
      if (!this.newInfo.image.name) return null;
      return this.newInfo.image.name;
    },

    // JupyterLab链接
    jupyterUrl () {
      if(!this.newInfo.jupyter_url) return '';
      return this.newInfo.jupyter_url;
    },

    // 容器状态
    status() {
      const status =
        this.newInfo && this.newInfo.status
          ? this.newInfo.status
          : this.container.status;
      switch (status) {
        case "New":
          return {
            text: "新创建",
            theme: "bg-primary",
          };
        case "Deployed":
          return {
            text: "等待部署",
            theme: "bg-info",
          };
        case "Init":
          return {
            text: "容器初始化",
            theme: "bg-info",
          };
        case "Repo_Clone_Success":
          return {
            text: "项目拉取成功",
            theme: "bg-info",
          };
        case "Pip_Install_Success":
          return {
            text: "依赖构建成功",
            theme: "bg-info",
          };
        case "Dataset_Load_Success":
          return {
            text: "数据集加载成功",
            theme: "bg-info",
          };
        case "Jupyterlab_Start_Success":
          return {
            text: "开发环境启动成功",
            theme: "bg-info",
          };
        case "Port_Forwarding_Success":
          return {
            text: "端口映射成功",
            theme: "bg-info",
          };
        case "Paused":
          return {
            text: "暂停",
            theme: "bg-info",
          };
        case "Running":
          return {
            text: "运行",
            theme: "bg-success",
          };
        case "Failure":
          return {
            text: "失效",
            theme: "bg-danger",
          };
        case "Deleted":
          return {
            text: "已删除",
            theme: "bg-secondary",
          };
        default:
          return {
            text: "NULL",
            theme: "bg-secondary",
          };
      }
    },

    // cpu使用
    cpu () {
      let cpu = this.newInfo.cpu_usage;
      let variant = "success"
      if (cpu >= 30 && cpu < 60) {
        variant = "warning";
      } else if (cpu >= 60) {
        variant = "danger";
      }
      return {
        value: cpu,
        variant
      }
    },

    // cpu使用 
    cpuUsage() {
      if (this.newInfo && this.newInfo.cpu_usage) return this.newInfo.cpu_usage;
      return this.container.cpu_usage;
    },

    // cpu使用条颜色
    cpuProgress() {
      let cpuUsage = this.container.cpu_usage;
      if (cpuUsage >= 30 && cpuUsage < 60) {
        return "warning";
      } else if (cpuUsage >= 60) {
        return "danger";
      } else {
        return "success";
      }
    },

    // mem使用
    mem(){
      let mem = this.newInfo.mem_usage;
      let variant = "success"
      if (mem >= 30 && mem < 60) {
        variant = "warning";
      } else if (mem >= 60) {
        variant = "danger";
      }
      return {
        value: mem,
        variant
      }
    },

    // 更新时间
    updateTime() {
      if (this.newInfo && this.newInfo.update_time)
        return this.newInfo.update_time;
      return this.container.update_time;
    },

    // docker_compose_config文件内容
    configFile() {
      let config = this.container.docker_compose_config;
      let blob = new Blob([config], { type: "application/x-yaml" });
      return URL.createObjectURL(blob);
    },
  },
  // mounted() {
  //   // 未删除容器，请求ws
  //   if (this.status.text !== "Deleted") this.initWebSocket();
  // },
  // destroyed() {
  //   // 退出关闭ws
  //   if (this.websock) this.websock.close();
  // },
  methods: {
    // // 主机相关API：获取主机列表
    // ...mapActions('hosts', ['listHosts']),

    // 容器相关API：运行容器
    ...mapActions('containers', ['runContainer', 'pauseContainer', 'restartContainer']),

    // 打开JupyterLab页面
    openLab(href) {
      window.open(href, "_blank");
    },

    // 删除容器
    delContainer() {
      this.loadingState = true;
      let id = this.container.id;
      this.$request
        .delete("containers/" + id)
        .then((res) => res.data)
        .then((res) => {
          if (res.code === 1) {

            Swal.fire("容器删除成功!", "", "success").then((res) => {
              if (res.isConfirmed) {
                console.log("触发刷新列表函数 from container-item");
                EventBus.$emit("update");
              }
            });

          } else {

            Swal.fire("容器删除失败!", "", "error");

          }
          this.loadingState = false;
        })
        .catch((err) => {
          this.loadingState = false;
          console.err(err);
        });
    },

    // 搜索主机
    changeHostsAction(value) {
      this.getHosts({
        q: value
      })
    },
    
    // 运行容器
    runInCloud () {
      if(!this.selectedHost && this.isAdmin) {
        return Swal.fire("请选择容器运行主机!", "", "error");
      }
      this.loadingState = true;
      let id = this.newInfo.id;
      let host_id = this.selectedHost ? this.selectedHost.id : "";
      this.runContainer({id, host_id})
      .then((data)=>{
        if(data.code === 1) {

          this.loadingState = false;
          EventBus.$emit("update");
          Swal.fire("容器启动成功!", "", "success");

        } else {

          Swal.fire("容器启动错误!", data.msg, "error")
          .then(() => {
            this.loadingState = false;
          })

        }
      })
      .catch((err)=>{
        Swal.fire("容器启动错误!", err, "error")
        .then(() => {
          this.loadingState = false;
        })
      })
    },

    // 暂停容器
    pause() {
      this.loadingState = true;
      let id = this.newInfo.id;
      this.pauseContainer({ id })
      .then((data) => {
        console.log(data);
        if(data.code === 1) {

          this.loadingState = false;
          EventBus.$emit("update");
          Swal.fire("容器暂停成功!", "", "success");

        } else {

          Swal.fire("容器暂停错误!", data.msg, "error")
          .then(() => {
            this.loadingState = false;
          })

        }
        
      })
      .catch((err) => {

        Swal.fire("容器暂停错误!", err, "error")
        .then(() => {
          this.loadingState = false;
        })

      })
    },

    // 重启容器
    restart() {
      this.loadingState = true;
      let id = this.newInfo.id;
      this.restartContainer({ id })
      .then((data) => {
        console.log(data);
        if(data.code === 1) {

          this.loadingState = false;
          EventBus.$emit("update");
          Swal.fire("容器重启成功!", "", "success");

        } else {

          Swal.fire("容器重启错误!", data.msg, "error")
          .then(() => {
            this.loadingState = false;
          });

        }
      })
      .catch((err) => {

        Swal.fire("容器重启错误!", err, "error")
        .then(() => {
          this.loadingState = false;
        });

      })
    },

    // 跳转容器详情页
    toContainerDetail(e){
      console.log(e)
      let target = e.target;
      if(target.matches('button') || target.matches('a') || target.matches('input') || target.matches('#location-radios span') || target.matches('label.btn') || target.matches('div.multiselect') || target.matches('div.multiselect__tags')) {
        console.log('不可跳转')
        return;
      }else if(target.matches('.username') || target.matches('.avatar')) {
        console.log('点击跳转用户信息页');
      } else {
        return this.$router.push({ path: '/container/' + this.container.id })
        // console.log('可以跳转详情页')
      }
    },

    // // ws初始化
    // initWebSocket() {
    //   const wsuri =
    //     process.env.VUE_APP_WS_URL + "_containers?id=" + this.container.id;
    //   this.websock = new WebSocket(wsuri, this.$keycloak.token);
    //   this.websock.onmessage = this.websocketonmessage;
    //   this.websock.onopen = this.websocketonopen;
    //   this.websock.onerror = this.websocketonerror;
    //   this.websock.onclose = this.websocketclose;
    // },

    // // ws连接建立之后执行send方法发送数据
    // websocketonopen() {},

    // // ws连接建立失败重连
    // websocketonerror() {
    //   this.initWebSocket();
    // },

    // // ws数据接收
    // websocketonmessage(res) {
    //   const message = JSON.parse(res.data);
    //   // this.newInfo = message;
    //   this.newInfo = { ...this.newInfo, ...message };
    //   // console.log(message);
    // },

    // // ws数据发送
    // websocketsend(data) {
    //   this.websock.send(data);
    // },

    // // ws关闭
    // websocketclose(e) {
    //   console.log("websocket error", e);
    // },

    // 暂停容器确认弹窗
    pauseContainerMsg() {
      Swal.fire({
        icon:'question',
        title: '确认暂停所选容器?',
        showCancelButton: true,
        confirmButtonText: `确认`,
        cancelButtonText: `取消`
      }).then((result) => {
        if (result.isConfirmed) {
          this.pause();
        }
      })
    },

    // 删除容器确认弹窗
    delContainerMsg() {
      Swal.fire({
        icon:'question',
        title: '确认删除所选容器?',
        showCancelButton: true,
        confirmButtonText: `确认`,
        cancelButtonText: `取消`
      }).then((result) => {
        if (result.isConfirmed) {
          this.delContainer();
        }
      })
    },
  },
}