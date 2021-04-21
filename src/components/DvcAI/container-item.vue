<script>
import Multiselect from "vue-multiselect";
import Swal from "sweetalert2";
import LoaderContainer from "@/components/DvcAI/loader-container";
import { EventBus } from "@/utils/event-bus";
import { mapState, mapActions } from "vuex";

export default {
  props: {
    container: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Multiselect,
    LoaderContainer,
  },
  data() {
    return {
      newInfo: this.container,
      websock: null,
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
    ...mapState("resources", ["hosts"]),

    // 当前用户信息
    ...mapState("auth", ["currentUser"]),

    // 是否是管理员
    isAdmin() {
      return this.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN");
    },

    // 是否是用户自己创建的容器
    isMine() {
      if(!this.currentUser.sub) return false;
      return this.newInfo.uid === this.currentUser.sub;
    },

    // 管理员是否可以操作
    isAdminOperate () {
      return this.isAdmin && this.isMine;
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

    // 判断图片是否存在
    isImgExist(){
      if(!this.container.user.avatar_url) return false;
      return this.imageIsExist(this.container.user.avatar_url);
    }
  },
  mounted() {
    // 未删除容器，请求ws
    if (this.status.text !== "Deleted") this.initWebSocket();
  },
  destroyed() {
    // 退出关闭ws
    if (this.websock) this.websock.close();
  },
  methods: {
    // 主机相关API：获取主机列表
    ...mapActions('resource', ['getHosts']),

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

    // ws初始化
    initWebSocket() {
      const wsuri =
        process.env.VUE_APP_WS_URL + "_containers?id=" + this.container.id;
      this.websock = new WebSocket(wsuri, this.$keycloak.token);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },

    // ws连接建立之后执行send方法发送数据
    websocketonopen() {},

    // ws连接建立失败重连
    websocketonerror() {
      this.initWebSocket();
    },

    // ws数据接收
    websocketonmessage(res) {
      const message = JSON.parse(res.data);
      // this.newInfo = message;
      this.newInfo = { ...this.newInfo, ...message };
      // console.log(message);
    },

    // ws数据发送
    websocketsend(data) {
      this.websock.send(data);
    },

    // ws关闭
    websocketclose(e) {
      console.log("websocket error", e);
    },

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

    // 判断图片url是否可以加载
    async imageIsExist (url) {
      let img = new Image();
      img.src = url;
      img.onload = function () {
        if (this.complete == true){
          return true;
        }
      }
      img.onerror = function () {
        return false;
      }
    },
  },
};
</script>

<template>
  <LoaderContainer :loading="loadingState">
    <div class="list-item-con">
      <div class="row align-items-center">

        <div class="col-12 col-md-6 mb-2">
          <div class="row">

            <div class="col-12 col-md-4">
              <h5 class="d-block text-truncate text-dark mb-0 list-item-name">
                <i class="bx bx-cube me-1"></i>
                <span class="me-1"> {{ newInfo.container_name }}</span>
                <span
                  v-if="!canSelectLocation"
                  class="badge rounded-pill"
                  :class="`bg-${ newInfo.user_host ? 'primary' : 'info' }`"
                >
                  {{ newInfo.user_host ? '本地' : '远程' }}
                </span>
              </h5>
            </div>

            <div class="col-12 col-md-4">
              <span
                v-if="image"
                class="d-block text-truncate mb-0"
              >
                <i class="bx bx-layer me-1"></i>
                {{ image }}
              </span>
            </div>

            <div class="col-12 col-md-4 d-none d-md-block">
              <div class="d-flex align-items-center">
                <img
                  v-if="isImgExist"
                  class="rounded-circle avatar-xxs me-2"
                  v-real-img="container.user.avatar_url"
                  alt=""
                />
                <div v-else class="avatar-xxs me-2">
                  <span class="avatar-title rounded-circle">{{ container.user.username[0] }}</span>
                </div>
                <span class="d-inline-block text-truncate">
                  {{ container.user.username }}
                </span>
              </div>
            </div>

            <div class="col-12 d-md-none">
              <span class="d-block text-truncate mb-0">
                <i class="bx bx-user me-1"></i>
                {{ container.user.username }}
              </span>
            </div>

          </div>
          
        </div>

        <div class="col-12 col-md-6 mb-2">
          <div class="float-start float-md-end text-truncate">
            <span class="badge me-2" :class="status.theme">
              <span v-if="newInfo.status === 'Running' && newInfo.alive_time">
                已运行 {{ newInfo.alive_time | duration('humanize') }}
              </span>
              <span v-else>
                {{ status.text }}
              </span>
            </span>
            
            <span class="text-success">
              {{ updateTime | moment("YYYY-MM-DD HH:mm:ss") }}
            </span>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-6 col-md-2 mb-2">
          <span class="badge rounded-pill bg-primary me-2">
            <i class="bx bx-chip me-1"></i>内核
          </span>
          {{ container.cpus }}
        </div>

        <div class="col-6 col-md-2 mb-2">
          <span class="badge rounded-pill bg-primary me-2">
            <i class="bx bx-grid-alt me-1"></i>内存
          </span>
          {{ container.mem }}GB
        </div>

      </div>
      <div class="row">

        <div class="col-12 col-md-2 mb-2">
          <p class="mb-0">CPU使用</p>
          <b-progress
            :value="cpu.value"
            :max="100"
            :variant="cpu.variant"
          ></b-progress>
        </div>

        <div class="col-12 col-md-2 mb-2">
          <p class="mb-0">内存使用</p>
          <b-progress
            :value="mem.value"
            :max="100"
            :variant="mem.variant"
          ></b-progress>
        </div>
        
        <div class="col-12 col-md-8">
          <div v-if="!isDel" class="float-end w-100 container-btn-group">
            
            <b-form-radio-group
              v-if="canSelectLocation && isMine"
              id="location-radios"
              class="text-truncate check-group btn-item mb-0"
              size="sm"
              v-model="containerRunningSelected"
              :options="locationOptions"
              buttons
              button-variant="outline-primary"
              name="local-cloud-radios"
            ></b-form-radio-group>
          
            <a
              v-if="canSelectLocation && isLocation && isMine"
              :href="configFile"
              class="btn btn-outline-primary btn-sm btn-item"
              download="docker-compose-config"
            >
            <i class="bx bx-cloud-download font-size-16 align-middle me-1"></i>
            本地运行
            </a>

            <multiselect
              class="host-select d-inline-block btn-item"
              v-if="!isLocation && isAdmin && canSelectLocation && isMine"
              v-model="selectedHost"
              :options="hosts"
              @search-change="changeHostsAction"
              track-by="ip"
              label="ip"
              placeholder="选择主机"
              select-label="选择主机"
              selectedLabel="已选"
              deselectLabel="点击取消"
            >
              <template slot="singleLabel" slot-scope="{ option }" class="i-text-middle">
                <div class="text-truncate i-text-middle">
                  <i class="bx bx-laptop me-1"></i>
                  {{ option.ip }}
                </div>
              </template>
              <span slot="noResult">未搜索到相关主机</span>
            </multiselect>

            <b-button v-if="canSelectLocation && !isLocation && isMine" class="text-truncate i-text-middle btn-item" variant="outline-primary" size="sm" @click="runInCloud">
              <i class="bx bx bx-cloud-upload font-size-16 align-middle me-1"></i>
              云端运行
            </b-button>

            <a
              v-if="canSelectCloudRunning && isMine"
              :href="jupyterUrl"
              class="btn btn-outline-primary btn-sm btn-item"
              download="docker-compose-config"
              target="_blank"
            >
              <i class="bx bx-code-block font-size-16 align-middle me-1"></i>
              JupyterLab
            </a>

            <b-button v-if="canSelectCloudRunning && !isUserHost" class="text-truncate i-text-middle btn-item" variant="outline-primary" size="sm" @click="pauseContainerMsg">
              <i class="bx bx-pause font-size-16 align-middle me-1"></i>
              暂停
            </b-button>

            <b-button v-if="isRestartShow && !isUserHost" class="text-truncate i-text-middle btn-item" variant="outline-primary" size="sm" @click="restart">
              <i class="bx bx-revision font-size-16 align-middle me-1"></i>
              重启
            </b-button>

            <b-button v-if="!canSelectLocation" class="text-truncate i-text-middle btn-item" variant="outline-danger" size="sm" @click="delContainerMsg">
              <i class="bx bx-trash font-size-16 align-middle me-1"></i>
              删除
            </b-button>

          </div>
        </div>
      </div>
    </div>
  </LoaderContainer>
</template>
<style scoped>
.i-text-middle {
  display: inline-flex;
  align-items: center;
}
.container-btn-group {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.container-btn-group .btn-item {
  margin-right: 0.5rem;
}
.container-btn-group .btn-item:last-child{
  margin-right: 0;
}
.select-custom {
  width: 30%;
  padding: 0.3rem 1.75rem 0.3rem 0.75rem;
}
.avatar-xxs {
  height: 1.5rem;
  width: 1.5rem;
  line-height: 1.5rem;
}
</style>