<script>
import GpuCard from "@/components/DvcAI/gpu-card";
import MluCard from "@/components/DvcAI/mlu-card";
/**
 * 镜像配置信息
 */

export default {
  components: { GpuCard, MluCard },
  props: {
    image: {
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
<div v-if="image">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">镜像</h5>
      <div class="row">
        <div v-if="image.id" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">ID</p>
        </div>
        <div v-if="image.id" class="col-sm-12 col-md-10">
          <span>{{image.id}}</span>
        </div>

        <div v-if="image.ip" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">IP</p>
        </div>
        <div v-if="image.ip" class="col-sm-12 col-md-10">
          <span>{{image.ip}}</span>
        </div>

        <div v-if="image.port" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">端口</p>
        </div>
        <div v-if="image.port" class="col-sm-12 col-md-10">
          <span>{{image.port}}</span>
        </div>

        <div v-if="image.cpu_info.cpu_model_name" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">CPU</p>
        </div>
        <div v-if="image.cpu_info.cpu_model_name" class="col-sm-12 col-md-10">
          <span>{{image.cpu_info.cpu_model_name}}</span>
        </div>

        <div v-if="image.cpu_info.cpu_num" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">核数</p>
        </div>
        <div v-if="image.cpu_info.cpu_num" class="col-sm-12 col-md-10">
          <span>{{image.cpu_info.cpu_num}} 核</span>
        </div>

        <div v-if="image.mem_info.total" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">内存</p>
        </div>
        <div v-if="image.mem_info.total" class="col-sm-12 col-md-10">
          <span>{{image.mem_info.total | gbFiltertoNum}} {{image.mem_info.total | gbFiltertoUnit}}</span>
        </div>

        <div v-if="image.io_info.disk_total" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">硬盘</p>
        </div>
        <div v-if="image.io_info.disk_total" class="col-sm-12 col-md-10">
          <span>{{image.io_info.disk_total}} GB</span>
        </div>

        <div v-if="image.container_num" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">容器数</p>
        </div>
        <div v-if="image.container_num" class="col-sm-12 col-md-10">
          <span>{{image.container_num}}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-if="image.io_info" class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">硬盘</h5>
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">可用/总硬盘(GB)</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{image.io_info.disk_free}}/{{image.io_info.disk_total}}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-if="image.gpu_info" class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">GPU</h5>
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">数量</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{image.gpu_info.attached_gpus}}</span>
        </div>
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">Nvidia Driver</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{ image.gpu_info.driver_version }}</span>
        </div>
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">CUDA版本</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{image.gpu_info.cuda_version}}</span>
        </div>
        <div class="col-12">
          <div v-if="image.gpu_info" class="row">
            <GpuCard
              class="col-md-12 col-lg-12 mt-2"
              v-for="(gpu, index) in image.gpu_info.gpus"
              :key="index"
              :gpu="gpu"
            />
          </div>
        </div>
        <div class="col-12">
          <div v-if="!this.$_.isNil(image.mlu_info)" class="row">
            <MluCard
            class="col-md-12 col-lg-12 mt-2"
              v-for="(mlu, index) in image.mlu_info.mlus"
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