<script>
export default {
  components: {},
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
  data () {
    return {
    }
  },
  computed: {
    
  },
  methods: {
    chartColor(num){
      if(num<=40){
        return 'success'
      }else if(num>40&&num<=70){
        return 'warning'
      }else{
        return 'danger'
      }
    }
  } 
}
</script>
<template>
  <div class="col-md-12 col-xl-6 mt-2">
    <div
      class="rounded"
      style="border: 1px #69c solid;padding: 0.2rem 0.4rem;background:#e7f4ff"
    >
      <div class="row">
        <div class="col-12 col-md-6">
          <feather type="cpu" class="float-left mt-2 mr-2"></feather>
          <span class="badge badge-warning badge-pill">{{gpu.product_name}}</span>

          <br />
          <span class="badge badge-pill badge-soft-primary"
            >总显存：{{ gpu.memory_total }} MiB</span
          >
        </div>

        <div class="col-4 col-md-2">
          <span>GPU使用</span><br />
          <b-progress :value="gpu.gpu_util" :max="100" :style="{ 'background-color': '#e4e4e4' }" :variant="chartColor(gpu.gpu_util)" show-progress class=""></b-progress>
        </div>

        <div class="col-4 col-md-2">
          <span>显存使用</span><br />
          <b-progress :value="gpu.memory_util" :max="100" :style="{ 'background-color': '#e4e4e4' }" :variant="chartColor(gpu.memory_util)" show-progress class=""></b-progress>
        </div>

        <div class="col-4 col-md-2">
          <span>风扇转速</span><br />
          <b-progress :value="gpu.fan_speed" :max="100" :style="{ 'background-color': '#e4e4e4' }" :variant="chartColor(gpu.fan_speed)" show-progress class=""></b-progress>
        </div>
        
      </div>
    </div>
  </div>
</template>