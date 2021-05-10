<script>
import { mapState, mapActions } from "vuex";
import Multiselect from "vue-multiselect";
import Swal from "sweetalert2";
import { EventBus } from "@/utils/event-bus";

/**
 * Container Detail Rightsidebar component
 */

export default {
  components: { Multiselect },
  props: {
    container: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
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
    // 容器运行状态
    status() {
      const status = this.container.status;
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
      if (!this.currentUser || !this.currentUser.sub) return false;
      return this.container.uid === this.currentUser.sub;
    },

    // 是否在用户本机
    isUserHost() {
      return this.container.user_host;
    },

    // 本地/远程按钮控制其他按钮显示
    isLocation() {
      if (this.containerRunningSelected === "cloud") return false;
      return true;
    },

    // 是否可以选择运行位置
    canSelectLocation() {
      return this.container.status === "New";
    },

    // 是否可以选择JupyterLab运行
    canSelectCloudRunning() {
      const status = this.container.status;
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
    isRestartShow() {
      const status =
        this.container && this.container.status
          ? this.container.status
          : this.container.status;
      if (status === "Paused") {
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
      if (!this.container.image.name) return null;
      return this.container.image.name;
    },

    // JupyterLab链接
    jupyterUrl() {
      if (!this.container.jupyter_url) return "";
      return this.container.jupyter_url;
    },

    // docker_compose_config文件内容
    configFile() {
      let config = this.container.docker_compose_config;
      let blob = new Blob([config], { type: "application/x-yaml" });
      return URL.createObjectURL(blob);
    },
  },
  methods: {
    // 容器相关API：运行容器
    ...mapActions("containers", [
      "runContainer",
      "pauseContainer",
      "restartContainer",
    ]),

    // 打开JupyterLab页面
    openLab(href) {
      window.open(href, "_blank");
    },

    // 删除容器
    delContainer() {
      this.loadingState = true;
      this.$emit('changeLoading', true);
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
          this.$emit('changeLoading', false);
        })
        .catch((err) => {
          this.loadingState = false;
          this.$emit('changeLoading', false);
          console.err(err);
        });
    },

    // 搜索主机
    changeHostsAction(value) {
      this.getHosts({
        q: value,
      });
    },

    // 运行容器
    runInCloud() {
      if (!this.selectedHost && this.isAdmin) {
        return Swal.fire("请选择容器运行主机!", "", "error");
      }
      this.loadingState = true;
      this.$emit('changeLoading', true);
      let id = this.container.id;
      let host_id = this.selectedHost ? this.selectedHost.id : "";
      this.runContainer({ id, host_id })
        .then((data) => {
          if (data.code === 1) {
            this.loadingState = false;
            this.$emit('changeLoading', false);
            EventBus.$emit("update");
            Swal.fire("容器启动成功!", "", "success");
          } else {
            Swal.fire("容器启动错误!", data.msg, "error").then(() => {
              this.loadingState = false;
              this.$emit('changeLoading', false);
            });
          }
        })
        .catch((err) => {
          Swal.fire("容器启动错误!", err, "error").then(() => {
            this.loadingState = false;
            this.$emit('changeLoading', false);
          });
        });
    },

    // 暂停容器
    pause() {
      this.loadingState = true;
      this.$emit('changeLoading', true);
      let id = this.container.id;
      this.pauseContainer({ id })
        .then((data) => {
          console.log(data);
          if (data.code === 1) {
            this.loadingState = false;
            this.$emit('changeLoading', false);
            EventBus.$emit("update");
            Swal.fire("容器暂停成功!", "", "success");
          } else {
            Swal.fire("容器暂停错误!", data.msg, "error").then(() => {
              this.loadingState = false;
              this.$emit('changeLoading', false);
            });
          }
        })
        .catch((err) => {
          Swal.fire("容器暂停错误!", err, "error").then(() => {
            this.loadingState = false;
            this.$emit('changeLoading', false);
          });
        });
    },

    // 重启容器
    restart() {
      this.loadingState = true;
      this.$emit('changeLoading', true);
      let id = this.container.id;
      this.restartContainer({ id })
        .then((data) => {
          console.log(data);
          if (data.code === 1) {
            this.loadingState = false;
            this.$emit('changeLoading', false);
            EventBus.$emit("update");
            Swal.fire("容器重启成功!", "", "success");
          } else {
            Swal.fire("容器重启错误!", data.msg, "error").then(() => {
              this.loadingState = false;
              this.$emit('changeLoading', false);
            });
          }
        })
        .catch((err) => {
          Swal.fire("容器重启错误!", err, "error").then(() => {
            this.loadingState = false;
            this.$emit('changeLoading', false);
          });
        });
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
  },
};
</script>
<template>
  <div v-if="container" class="card">
    <div class="card-body">
      <div class="media align-items-center">
        <div class="align-self-center me-3">
          <img
            src="@/assets/images/users/avatar-1.jpg"
            v-real-img="container.user.avatar_url"
            class="avatar-xs rounded-circle"
            alt
          />
        </div>
        <div class="media-body">
          <h5 class="font-size-15 mt-0 mb-1">
            {{ container.user.username }}
          </h5>
        </div>
      </div>
      <hr class="mt-2" />
      <p class="mb-1">
        <i class="bx bx-stats me-1"></i>运行状态
        <span class="badge me-2" :class="status.theme">
          {{ status.text }}
        </span>
      </p>
      <p class="mb-1">
        <i class="bx bx-calendar me-1"></i>创建时间
        {{ container.create_time | moment("YYYY-MM-DD HH:mm:ss") }}
      </p>
      <p v-show="this.container.status === 'Running'" class="mb-1">
        <i class="bx bx-calendar me-1"></i>运行时间
        {{ container.alive_time | duration("humanize") }}
      </p>

      <div v-if="!isDel" class="mt-4">
        <div class="mb-2">
          <b-form-radio-group
            v-if="canSelectLocation && isMine"
            id="location-radios"
            class="text-truncate check-group btn-item mb-0"
            size="md"
            v-model="containerRunningSelected"
            :options="locationOptions"
            buttons
            button-variant="outline-primary"
            name="local-cloud-radios"
          ></b-form-radio-group>
        </div>
        
        <a
          v-if="canSelectLocation && isLocation && isMine"
          :href="configFile"
          class="btn btn-outline-primary btn-md btn-item mb-2"
          download="docker-compose-config"
        >
          <i class="bx bx-cloud-download font-size-16 align-middle me-1"></i>
          本地运行
        </a>

        <multiselect
          class="d-inline-block btn-item me-2 mb-2"
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
          <template
            slot="singleLabel"
            slot-scope="{ option }"
            class="i-text-middle"
          >
            <div class="text-truncate i-text-middle">
              <i class="bx bx-laptop me-1"></i>
              {{ option.ip }}
            </div>
          </template>
          <span slot="noResult">未搜索到相关主机</span>
        </multiselect>

        <b-button
          v-if="canSelectLocation && !isLocation && isMine"
          class="text-truncate i-text-middle btn-item mb-2"
          variant="outline-primary"
          size="md"
          @click="runInCloud"
        >
          <i class="bx bx bx-cloud-upload font-size-16 align-middle me-1"></i>
          云端运行
        </b-button>

        <a
          v-if="canSelectCloudRunning"
          :href="jupyterUrl"
          class="btn btn-outline-primary btn-md btn-item me-2 mb-2"
          download="docker-compose-config"
          target="_blank"
        >
          <i class="bx bx-code-block font-size-16 align-middle me-1"></i>
          JupyterLab
        </a>

        <b-button
          v-if="canSelectCloudRunning && !isUserHost"
          class="text-truncate i-text-middle btn-item me-2 mb-2"
          variant="outline-primary"
          size="md"
          @click="pauseContainerMsg"
        >
          <i class="bx bx-pause font-size-16 align-middle me-1"></i>
          暂停
        </b-button>

        <b-button
          v-if="isRestartShow && !isUserHost"
          class="text-truncate i-text-middle btn-item me-2 mb-2"
          variant="outline-primary"
          size="md"
          @click="restart"
        >
          <i class="bx bx-revision font-size-16 align-middle me-1"></i>
          重启
        </b-button>

        <b-button
          v-if="!canSelectLocation"
          class="text-truncate i-text-middle btn-item me-2 mb-2"
          variant="outline-danger"
          size="md"
          @click="delContainerMsg"
        >
          <i class="bx bx-trash font-size-16 align-middle me-1"></i>
          删除
        </b-button>
      </div>
    </div>
  </div>
</template>
