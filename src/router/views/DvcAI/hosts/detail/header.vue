<script>
/**
 * Container Header component
 */

export default {
  components: {},
  props: {
    host: {
      type: Object,
      default: () => {},
    },
  },
  
  filters: {
    // 取id前8位
    preId(id) {
      return id.slice(0, 8);
    },
    // 计算机存储数值换算,默认传进来的最小单位为GB
    gbFiltertoNum (value) {

      if (value === 0) return '0'
 
      const k = 1024

      let i = Math.floor(Math.log(value) / Math.log(k))

      return (value / Math.pow(k, i)).toPrecision(4)
    },

    // 计算机存储单位换算,默认传进来的最小单位为GB
    gbFiltertoUnit (value) {

      if (value === 0) return 'GB'
 
      const k = 1024
      const sizes = ['GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

      let i = Math.floor(Math.log(value) / Math.log(k))

      return sizes[i];
    },
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    updateTime() {
      let curTime = new Date(this.host.update_time);
      return curTime;
    },
    running() {
      return this.host.status === "RUNNING";
    },
    cpuIOWait() {
      return Math.floor(this.host.cpu_info.io_wait * 10000) / 100;
    },
    cpuUsage() {
      return Math.floor(this.host.cpu_info.usage * 100 * 100) / 100;
    },
    memUsage() {
      return Math.floor(this.host.mem_info.usage * 100 * 100) / 100;
    },
  },
  methods: {},
};
</script>
<template>
  <div v-if="host" class="card mb-4">
    <div class="card-body">
      <div class="row">
        <div class="col-12 mb-2">
          <h4>
            {{ host.ip }}
            <span class="text-secondary font-size-13">（{{ host.id | preId }}）</span>
          </h4>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div
                  v-if="!this.$_.isNil(host.cpu_info.cpu_model_name)"
                  class="col-sm-12 col-md-12 col-lg-8 mb-2"
                  style="font-weight: bold"
                >
                  <span>{{ host.cpu_info.cpu_model_name }}</span>
                </div>
                <div
                  v-if="!this.$_.isNil(host.cpu_info.cpu_num)"
                  class="col-sm-12 col-md-12 col-lg-4 mb-2"
                >
                  <span class="badge rounded-pill bg-primary">
                    <i class="bx bx-chip me-1" />内核
                  </span>
                  <span> {{ host.cpu_info.cpu_num }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div
              v-if="!this.$_.isNil(host.mem_info.total)"
              class="col-sm-6 col-md-6 col-lg-3 mb-2 text-truncate"
            >
              <span class="badge rounded-pill font-size-11 badge-soft-primary">
                <i class="bx bx-grid-alt me-1" />内存
              </span>
              <span> {{ host.mem_info.total | gbFiltertoNum }}{{ host.mem_info.total | gbFiltertoUnit }}</span>
            </div>
            <div
              v-if="!this.$_.isNil(host.container_num)"
              class="col-sm-6 col-md-6 col-lg-2 mb-2 text-truncate"
            >
              <span class="badge rounded-pill font-size-11 badge-soft-primary">
                <i class="bx bx-cube me-1" />容器
              </span>
              <span> {{ host.container_num }}</span>
            </div>
            <div
              v-if="!this.$_.isNil(host.gpu_info)"
              class="col-sm-6 col-md-6 col-lg-3 mb-2 text-truncate"
            >
              <span class="badge rounded-pill font-size-11 badge-soft-warning">
                <i class="bx bx-command" /> CUDA
                {{ host.gpu_info.cuda_version }}</span
              >
            </div>
            <div
              v-if="!this.$_.isNil(host.gpu_info)"
              class="col-sm-6 col-md-6 col-lg-4 mb-2"
            >
              <div class="text-truncate">
                <span class="badge rounded-pill font-size-11 badge-soft-success">
                <i class="bx bx-server" /> Nvidia Driver
                {{ host.gpu_info.driver_version }}
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
