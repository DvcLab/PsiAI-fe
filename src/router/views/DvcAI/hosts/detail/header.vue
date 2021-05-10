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
    preId(id){
      return id.slice(0,8)
    }
  },
  data() {
    return {
    }
  },
  mounted(){

  },
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
  methods: {
    
  }
};
</script>
<template>
  <div class="row">
    <div class="col-12 mb-2">
      <h4>{{ host.ip }}<span class="text-secondary font-size-13">（{{ host.id | preId }}）</span></h4>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <div class="row mb-1">
            <div
              v-if="!this.$_.isNil(host.cpu_info.cpu_model_name)"
              class="col-sm-12 col-md-6 mb-2"
              style="font-weight: bold"
            >
              <span>{{ host.cpu_info.cpu_model_name }}</span>
            </div>
            <div
              v-if="!this.$_.isNil(host.cpu_info.cpu_num)"
              class="col-sm-6 col-md-6 mb-2"
            >
              <span class="badge rounded-pill bg-primary">
                <i class="uil uil-circuit" />内核
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
          class="col-sm-6 col-md-4 col-lg-3 mb-2"
        >
          <span class="badge rounded-pill bg-primary">
            <i class="uil uil-dice-four" />内存
          </span>
          <span> {{ host.mem_info.total }} MiB</span>
        </div>
        <div
          v-if="!this.$_.isNil(host.container_num)"
          class="col-sm-6 col-md-4 col-lg-3 mb-2"
        >
          <span class="badge rounded-pill bg-primary">
            <i class="uil uil-box" />容器
          </span>
          <span> {{ host.container_num }}</span>
        </div>
        <div
          v-if="!this.$_.isNil(host.gpu_info)"
          class="col-sm-6 col-md-4 col-lg-3 mb-2"
        >
          <span class="badge rounded-pill font-size-11 badge-soft-success">
            <i class="uil uil-server" />Nvidia Driver
            {{ host.gpu_info.driver_version }}</span
          >
        </div>
        <div
          v-if="!this.$_.isNil(host.gpu_info)"
          class="col-sm-6 col-md-4 col-lg-3 mb-2"
        >
          <span class="badge rounded-pill font-size-11 badge-soft-warning">
            <i class="uil uil-servers" /> CUDA
            {{ host.gpu_info.cuda_version }}</span>
        </div>
      </div>
    </div>  
  </div>
</template>
