<script>
/**
 * Container Detail Rightsidebar component
 */
export default {
  components: {  },
  props: {
    container: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
    };
  },
  computed:{
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
  }
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
      <hr class="mt-2">
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
      <p class="mb-1">
        <i class="bx bx-calendar me-1"></i>运行时间

        {{ container.alive_time | duration('humanize') }}
      </p>
      
      
      <div class="mt-4">
        <b-button class="text-truncate i-text-middle btn-block w-100" variant="outline-primary" size="md">
          <i class="bx bx-pause font-size-16 align-middle me-1"></i>
          暂停
        </b-button>
      </div>
      
    </div>
  </div>
</template>