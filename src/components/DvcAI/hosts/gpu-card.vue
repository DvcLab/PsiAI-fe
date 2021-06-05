<script>
export default {

  props: {
    gpu: {
      type: Object,
      default: function () {
        return {
          memory_util: 0,
          fan_speed: 0,
          memory_total: 0,
          gpu_util: 0,
          product_name: "Telsa A100"
        }
      }
    }
  },

  methods: {
    chartColor(num){
      if(num <= 40){
        return 'success'
      }else if(num > 40 && num <= 70){
        return 'warning'
      }else{
        return 'danger'
      }
    }
  } 
}
</script>
<template>
  <div>
    <div
      class="gpu-card rounded"
    >
      <div class="row">

        <div class="col-12 col-md-6 d-inline-flex align-items-center">
          <i class="bx bx-chip d-inline-block fs-2" />
          <div class="d-inline-block ms-2">
            <span class="gpu-name">
              {{ gpu.product_name }}
            </span>
            <br />
            <span class="badge rounded-pill badge-soft-primary" style="font-size: 0.7rem">
              总显存：{{ gpu.memory_total }} MiB
            </span>
          </div>
        </div>

        <div class="col-4 col-md-2 text-truncate">
          <span style="font-size: 0.7rem">GPU使用</span><br />
          <b-progress
            :value="gpu.gpu_util"
            :max="100"
            :style="{ 'background-color': '#e4e4e4' }" :variant="chartColor(gpu.gpu_util)"
            show-progress
          ></b-progress>
        </div>

        <div class="col-4 col-md-2 text-truncate">
          <span style="font-size: 0.7rem">显存使用</span><br />
          <b-progress
            :value="gpu.memory_util"
            :max="100"
            :style="{ 'background-color': '#e4e4e4' }" :variant="chartColor(gpu.memory_util)"
            show-progress
          ></b-progress>
        </div>

        <div class="col-4 col-md-2 text-truncate">
          <span style="font-size: 0.7rem">风扇转速</span><br />
          <b-progress
            :value="gpu.fan_speed"
            :max="100"
            :style="{ 'background-color': '#e4e4e4' }" :variant="chartColor(gpu.fan_speed)"
            show-progress
          ></b-progress>
        </div>
        
      </div>
    </div>
  </div>
</template>
<style scoped>
.gpu-card {
  color: #916c2e;
  /*background-color: #fff1daf8;*/
  /*background-color: #fff4e3c9;*/
  border: dashed 2px rgba(241, 180, 76, 0.18);
  padding: 0.2rem 0.4rem;
}
.gpu-name {
  font-weight: 500;
}
</style>