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
      stompClient: "",
      timer: "",
      loadingState: false,
      containerRunningSelected: 'location',
      options: [
        { text: '本地', value: 'location', disabled: false },
        { text: '云端', value: 'cloud', disabled: false }
      ],
      selectedHost: null,
    };
  },
  computed: {
    // 主机列表
    ...mapState("resources", ["hosts"]),

    // 是否是管理员
    isAdmin() {
      return this.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN");
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

    // 运行位置显示
    locationOptions () {
      return [
        { text: '本地', value: 'location', disabled: !this.canSelectLocation && !this.newInfo.user_host },
        { text: '云端', value: 'cloud', disabled: !this.canSelectLocation && this.newInfo.user_host }
      ]
    },

    // 容器使用镜像
    image() {
      if (!this.container.image.name) return null;
      return this.container.image.name;
    },

    // JupyterLab链接
    jupyterUrl () {
      if(!this.newInfo.jupyter_url) return '';
      return this.newInfo.jupyter_url;
    },

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
    cpuUsage() {
      if (this.newInfo && this.newInfo.cpu_usage) return this.newInfo.cpu_usage;
      return this.container.cpu_usage;
    },
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
    memUsage() {
      if (this.newInfo && this.newInfo.mem_usage) return this.newInfo.mem_usage;
      return this.container.mem_usage;
    },
    memProgress() {
      let memUsage = this.container.mem_usage;
      if (memUsage >= 30 && memUsage < 60) {
        return "warning";
      } else if (memUsage >= 60) {
        return "danger";
      } else {
        return "success";
      }
    },
    updateTime() {
      if (this.newInfo && this.newInfo.update_time)
        return this.newInfo.update_time;
      return this.container.update_time;
    },
    configFile() {
      let config = this.container.docker_compose_config;
      let blob = new Blob([config], { type: "application/x-yaml" });
      return URL.createObjectURL(blob);
    },
    isDel() {
      if (this.container.status === "Deleted") return true;
      return false;
    },
  },
  mounted() {
    if (this.status.text !== "Deleted") this.initWebSocket();
  },
  destroyed() {
    if (this.websock) this.websock.close();
  },
  methods: {

    ...mapActions('resource', ['getHosts']),
    ...mapActions('containers', ['runContainer']),

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
            this.successMsg();
          } else {
            this.errorMsg();
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
      let id = this.newInfo.id;
      let host_id = this.selectedHost ? this.selectedHost.id : "";
      let gpu_enabled = false;// 不确定，暂时设置为false
      this.runContainer({id, host_id, gpu_enabled})
      .then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    // // 跳转JupyterLab
    // toLab () {

    // },

    // 初始化websocket
    initWebSocket() {
      const wsuri =
        process.env.VUE_APP_WS_URL + "_containers?id=" + this.container.id;
      this.websock = new WebSocket(wsuri, this.$keycloak.token);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },

    // 连接建立之后执行send方法发送数据
    websocketonopen() {},

    // 连接建立失败重连
    websocketonerror() {
      this.initWebSocket();
    },

    // 数据接收
    websocketonmessage(res) {
      const message = JSON.parse(res.data);
      // this.newInfo = message;
      this.newInfo = { ...this.newInfo, ...message };
      console.log(message);
    },

    // 数据发送
    websocketsend(data) {
      this.websock.send(data);
    },

    // 关闭
    websocketclose(e) {
      console.log("websocket error", e);
    },

    // 容器创建成功提醒
    successMsg() {
      Swal.fire("容器删除成功!", "", "success").then((res) => {
        if (res.isConfirmed) {
          console.log("触发刷新列表函数 from container-item");
          EventBus.$emit("update");
        }
      });
    },

    // 容器创建失败提醒
    errorMsg() {
      Swal.fire("容器删除失败!", "", "error");
    },
  },
};
</script>

<template>
  <LoaderContainer :loading="loadingState">
    <div class="list-item-con">
      <div class="row align-items-center">
        <div class="col-12 col-md-3 mb-2">
          <h5 class="d-block text-truncate text-dark mb-0 list-item-name">
            <i class="bx bx-code-block me-1"></i>
            {{ container.id }}
          </h5>
        </div>
        <div class="col-12 col-md-3 mb-2">
          <h5
            v-if="image"
            class="d-block text-truncate text-dark mb-0 list-item-name"
          >
            <i class="bx bx-layer me-1"></i>
            {{ image }}
          </h5>
        </div>
        <div class="col-12 col-md-3 mb-2">
          <span class="d-inline-block text-truncate">
            <i class="bx bx-user me-1"></i>
            {{ container.user.username }}
          </span>
        </div>
        <div class="col-12 col-md-3 mb-2">
          <div class="float-end d-none d-md-block">
            <span class="badge me-2" :class="status.theme">
              {{ status.text }}
            </span>
            <span class="text-success">{{
              updateTime | moment("YYYY-MM-DD HH:mm:ss")
            }}</span>
          </div>
          <div class="float-start d-md-none">
            <span class="badge me-2" :class="status.theme">
              {{ status.text }}
            </span>
            <span class="text-success">{{
              updateTime | moment("YYYY-MM-DD HH:mm:ss")
            }}</span>
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
            :value="cpuUsage"
            :max="100"
            :variant="cpuProgress"
          ></b-progress>
        </div>
        <div class="col-12 col-md-2 mb-2">
          <p class="mb-0">内存使用</p>
          <b-progress
            :value="memUsage"
            :max="100"
            :variant="memProgress"
          ></b-progress>
        </div>
        <div class="col-12 col-md-8">
          <div class="float-end w-100 container-btn-group">
            <b-form-radio-group
              id="location-radios"
              class="text-truncate check-group me-2 mb-0"
              size="sm"
              v-model="containerRunningSelected"
              :options="locationOptions"
              buttons
              button-variant="outline-primary"
              name="local-cloud-radios"
            ></b-form-radio-group>

            <b-button v-if="canSelectLocation && isLocation" class="text-truncate i-text-middle me-2" variant="primary" size="sm">
              <i class="bx bx-cloud-download font-size-16 align-middle me-1"></i>
              <a
                :href="configFile"
                class="text-white text-decoration-none"
                download="docker-compose-config"
              >
              本地运行
              </a>
            </b-button>

            <multiselect
              class="host-select d-inline-block me-2"
              v-if="!isLocation && isAdmin"
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
                <div class="i-text-middle">
                  <i class="bx bx-laptop me-1"></i>
                  {{ option.ip }}
                </div>
              </template>
              <span slot="noResult">未搜索到相关主机</span>
            </multiselect>

            <b-button v-if="canSelectLocation && !isLocation" class="text-truncate i-text-middle me-2" variant="primary" size="sm" @click="runInCloud">
              <i class="bx bx bx-cloud-upload font-size-16 align-middle me-1"></i>
              云端运行
            </b-button>

            <b-button v-if="canSelectCloudRunning && canSelectLocation" class="text-truncate i-text-middle me-2" variant="primary" size="sm">
              <i class="bx bx bx-cloud-upload font-size-16 align-middle me-1"></i>
              <a
                :href="jupyterUrl"
                class="text-white text-decoration-none"
                download="docker-compose-config"
                target="_blank"
              >
              JupyterLab
              </a>
            </b-button>

            <b-button v-if="canSelectCloudRunning && canSelectLocation" class="text-truncate i-text-middle me-2" variant="primary" size="sm">
              <i class="bx bx bx-cloud-upload font-size-16 align-middle me-1"></i>
              暂停
            </b-button>

            <b-button v-if="!canSelectLocation" class="text-truncate i-text-middle" variant="danger" size="sm" @click="delContainer">
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
.select-custom {
  width: 30%;
  padding: 0.3rem 1.75rem 0.3rem 0.75rem;
}
</style>