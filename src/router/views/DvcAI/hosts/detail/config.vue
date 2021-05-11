<script>
import GpuCard from "@/components/DvcAI/gpu-card";
import MluCard from "@/components/DvcAI/mlu-card";
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
  data() {
    return {
      
    };
  },
};
</script>
<template>
  <div>
    <div>
      <p class="text-primary">主机</p>
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">ID</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.id}}</span>
        </div>

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">IP</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.ip}}</span>
        </div>

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">端口</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.port}}</span>
        </div>

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">CPU</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.cpu_info.cpu_model_name}}</span>
        </div>

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">核数</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.cpu_info.cpu_num}} 核</span>
        </div>

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">内存</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.mem_info.total}} MiB</span>
        </div>

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">硬盘</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.io_info.disk_total}} GB</span>
        </div>

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">容器数</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.container_num}}</span>
        </div>
      </div>
    </div>
    <hr class="my-4">
    <div v-if="!this.$_.isNil(host.io_info)">
      <p class="text-primary">硬盘</p>
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">可用/总硬盘(GB)</p>
        </div>
        <div class="col-sm-12 col-md-10">
          <span>{{host.io_info.disk_free}}/{{host.io_info.disk_total}}</span>
        </div>
      </div>
    </div>
    <hr class="my-4">
    <div v-if="!this.$_.isNil(host.gpu_info)">
      <p class="text-primary">GPU</p>
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
          <div v-if="!this.$_.isNil(host.gpu_info)" class="row">
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
</template>
<style scoped>
hr:last-child {
  display: none;
}
</style>