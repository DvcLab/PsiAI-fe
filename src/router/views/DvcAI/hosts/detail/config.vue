<script>
/**
 * 主机配置信息
 */

export default {
  components: {  },
  props: {
    host: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      
    };
  },
};
</script>
<template>
  <div class="row">

    <div class="col-sm-12 col-md-2">
      <label class="text-muted">ID</label>
    </div>
    <div class="col-sm-12 col-md-10">
      <span>{{host.id}}</span>
    </div>

    <div class="col-sm-12 col-md-2">
      <label class="text-muted">IP</label>
    </div>
    <div class="col-sm-12 col-md-10">
      <span>{{host.ip}}</span>
    </div>

    <div class="col-sm-12 col-md-2">
      <label class="text-muted">CPU型号</label>
    </div>
    <div class="col-sm-12 col-md-10">
      <span>{{host.cpu_info.cpu_model_name}}</span>
    </div>

    <div class="col-sm-12 col-md-2">
      <label class="text-muted">CPU核数</label>
    </div>
    <div class="col-sm-12 col-md-10">
      <span>{{host.cpu_info.cpu_num}}核</span>
    </div>

    <div class="col-sm-12 col-md-2">
      <label class="text-muted">内存</label>
    </div>
    <div class="col-sm-12 col-md-10">
      <span>{{host.mem_info.total}} MiB</span>
    </div>

    <div class="col-sm-12 col-md-2">
      <label class="text-muted">硬盘</label>
    </div>
    <div class="col-sm-12 col-md-10">
      <span>{{host.io_info.disk_total}} MiB</span>
    </div>

    <div class="col-sm-12 col-md-2">
      <label class="text-muted">容器数</label>
    </div>
    <div class="col-sm-12 col-md-10">
      <span>{{host.container_num}}</span>
    </div>

    <div v-if="!this.$_.isNil(host.gpu_info)" class="col-sm-12 col-md-2">
      <label class="text-muted">GPU版本</label>
    </div>
    <div v-if="!this.$_.isNil(host.gpu_info)" class="col-sm-12 col-md-10">
      <span>{{host.gpu_info.driver_version}}</span>
    </div>

    <div v-if="!this.$_.isNil(host.gpu_info)" class="col-sm-12 col-md-2">
      <label class="text-muted">CUDA版本</label>
    </div>
    <div v-if="!this.$_.isNil(host.gpu_info)" class="col-sm-12 col-md-10">
      <span>{{host.gpu_info.cuda_version}}</span>
    </div>

    <div v-if="!this.$_.isNil(host.gpu_info)" class="col-sm-12 col-md-2">
      <label class="text-muted">GPU数量</label>
    </div>
    <div v-if="!this.$_.isNil(host.gpu_info)" class="col-sm-12 col-md-10">
      <span>{{host.gpu_info.attached_gpus}}</span>
    </div>
  </div>
</template>