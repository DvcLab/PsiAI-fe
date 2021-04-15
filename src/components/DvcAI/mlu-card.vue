<script>
export default {
  props: {
    mlu: {
      type: Object,
      default: function () {
        return {
          id: 0,
          model_name: "Telsa A100",
          util: 0,
          fan: 0,
          temp: 0,
          mem_usage: 0,
          mem_total: 1,
        }
      }
    }
  },

  computed: {
    memRatio() {
      return this.mlu.mem_usage / this.mlu.mem_total;
    }
  },

  methods: {
    chartColor(num){
      if(num <= 40){
        return 'success'
      }else if(num <= 70){
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
      style="border: 1px #ffff4d solid;padding: 0.2rem 0.4rem;background:#ffffe5"
    >

      <div class="row">
        
        <div class="col-12 col-md-6 d-inline-flex align-items-center">
          <i class="bx bx-chip d-inline-block fs-2" />
          <div class="d-inline-block ms-2">
            <span class="badge rounded-pill bg-warning">
              {{ mlu.model_name }}
            </span>
            <br />
            <span class="badge rounded-pill bg-primary">
              总内存：{{ mlu.mem_total }} MiB
            </span>
          </div>
        </div>

        <div class="col-4 col-md-2">
          <span>GPU使用</span><br />
          <b-progress
            :value="mlu.util"
            :max="100"
            :style="{ 'background-color': '#e4e4e4' }" :variant="chartColor(mlu.util)"
            show-progress
          ></b-progress>
        </div>

        <div class="col-4 col-md-2">
          <span>内存使用</span><br />
          <b-progress
            :value="memRatio"
            :max="100"
            :style="{ 'background-color': '#e4e4e4' }" :variant="chartColor(memRatio)"
            show-progress
          ></b-progress>
        </div>

        <div class="col-4 col-md-2">
          <span>风扇转速</span><br />
          <b-progress
            :value="mlu.fan"
            :max="100"
            :style="{ 'background-color': '#e4e4e4' }" :variant="chartColor(mlu.fan)"
            show-progress
          ></b-progress>
        </div>

      </div>
    </div>
  </div>
</template>