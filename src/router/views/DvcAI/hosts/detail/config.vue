<script>
import GpuCard from "@/components/DvcAI/hosts/gpu-card";
import MluCard from "@/components/DvcAI/hosts/mlu-card";
/**
 * 主机配置信息
 */

export default {
  components: { GpuCard, MluCard },
  props: {
    host: {
      type: Object,
      default: () => {},
    },
  },
  filters:{
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
    return {
      
    };
  },
};
</script>
<template>
<div v-if="host">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">主机</h5>
      <div class="row">
        <div v-if="host.id" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">ID</p>
        </div>
        <div v-if="host.id" class="col-sm-12 col-md-10">
          <span>{{host.id}}</span>
        </div>

        <div v-if="host.ip" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">IP</p>
        </div>
        <div v-if="host.ip" class="col-sm-12 col-md-10">
          <span>{{host.ip}}</span>
        </div>

        <div v-if="host.port" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">端口</p>
        </div>
        <div v-if="host.port" class="col-sm-12 col-md-10">
          <span>{{host.port}}</span>
        </div>

        <div v-if="host.cpu_info.cpu_model_name" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">CPU</p>
        </div>
        <div v-if="host.cpu_info.cpu_model_name" class="col-sm-12 col-md-10">
          <span>{{host.cpu_info.cpu_model_name}}</span>
        </div>

        <div v-if="host.cpu_info.cpu_num" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">核数</p>
        </div>
        <div v-if="host.cpu_info.cpu_num" class="col-sm-12 col-md-10">
          <span>{{host.cpu_info.cpu_num}} 核</span>
        </div>

        <div v-if="host.mem_info.total" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">内存</p>
        </div>
        <div v-if="host.mem_info.total" class="col-sm-12 col-md-10">
          <span>{{host.mem_info.total | gbFiltertoNum}} {{host.mem_info.total | gbFiltertoUnit}}</span>
        </div>

        <div v-if="host.io_info.disk_total" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">硬盘</p>
        </div>
        <div v-if="host.io_info.disk_total" class="col-sm-12 col-md-10">
          <span>{{host.io_info.disk_total | gbFiltertoNum}}  {{host.io_info.disk_total | gbFiltertoUnit}}</span>
        </div>

        <div v-if="host.container_num" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">容器数</p>
        </div>
        <div v-if="host.container_num" class="col-sm-12 col-md-10">
          <span>{{host.container_num}}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-if="host.io_info" class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">硬盘</h5>
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">可用/总硬盘</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.io_info.disk_free | gbFiltertoNum}} {{host.io_info.disk_free | gbFiltertoUnit}} / {{host.io_info.disk_total | gbFiltertoNum}} {{host.io_info.disk_total | gbFiltertoUnit}}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-if="host.gpu_info" class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">GPU</h5>
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">数量</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.gpu_info.attached_gpus}}</span>
        </div>
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">Nvidia Driver</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{ host.gpu_info.driver_version }}</span>
        </div>
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">CUDA版本</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.gpu_info.cuda_version}}</span>
        </div>
        <div class="col-12">
          <div v-if="host.gpu_info" class="row">
            <GpuCard
              class="col-md-12 col-lg-12 mt-2"
              v-for="(gpu, index) in host.gpu_info.gpus"
              :key="index"
              :gpu="gpu"
            />
          </div>
        </div>
        <div class="col-12">
          <div v-if="!this.$_.isNil(host.mlu_info)" class="row">
            <MluCard
            class="col-md-12 col-lg-12 mt-2"
              v-for="(mlu, index) in host.mlu_info.mlus"
              :key="index"
              :mlu="mlu"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
hr:last-child {
  display: none;
}
</style>