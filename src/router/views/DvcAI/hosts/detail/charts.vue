<script>
import ECharts from "vue-echarts";
import 'echarts/lib/chart/line';
/**
 * 主机配置信息
 */

export default {
  components: { "v-chart": ECharts },
  props: {
    host: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      height: '200px'
    }
  },
  computed: {
    // cpu_series() {
    //   if(!this.host.cpu_series) return;
    //   let cpuList = [];
    //   this.host.cpu_series.forEach(item => {
    //     let [x,y] = item
    //     cpuList.push([x,y * 100])
    //   })
    //   return cpuList;
    // },
    gpu_series() {
      if(!this.host.gpu_series) return;
      let gpuList = [];
      this.host.gpu_series.forEach(item => {
        let [x,y] = item
        gpuList.push([x,y / 100])
      })
      return gpuList;
    },
    mlu_series() {
      if(!this.host.mlu_series) return;
      let mluList = [];
      this.host.mlu_series.forEach(item => {
        let [x,y] = item
        mluList.push([x,y / 100])
      })
      return mluList;
    }
  },
  methods: {
    // 使用率曲线option
    getLineChartOption (lineData) {

      let option = {
        color: ['#d83f87', '#c6c433', '#61a0a8', '#d48265', '#91c7ae', '#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        grid:{
          x: 40,
          y: 22,
          x2: 25,
          y2: 20,
          borderWidth: 0,
          show: true,
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        },
        tooltip: {
          trigger: 'item',
        },
        xAxis: [
        {
          type: 'time',// 时间
          splitLine: {
            show: true,
            lineStyle:{
              color: '#789',
              type: 'dotted',
              width: 1
            }
          },
          axisLine:{ // 设置x轴线的样式
            lineStyle:{
              color:'#a4b3b6',
              width:1.5
            }
          },
          axisLabel: { // 设置x轴数值的样式
            show: true,
          }
        }],
        yAxis: [
        {
          type: 'value',
          minInterval: 0.1,
          max: 1,
          boundaryGap: [0, '100%'],// 坐标轴两侧的边界
          splitLine: {// 网格线是否显示
            show: true,
            lineStyle:{
              color: '#789',
              type: 'dotted',
              width: 1
            }
          },
          axisLine:{ // 设置y轴线的样式
            lineStyle:{
              color: '#a4b3b6',
              width: 1
            }
          },
          axisLabel: { // 设置y轴数值的样式
            show: true,
            // fontWeight:'bold',
            formatter: function(value){ // 设置y轴数值显示方式
              return value*100 + '%'
            },
          },

        }],
        series: [{
          xAxisIndex: 0,
          yAxisIndex: 0,
          type: 'line',
          lineStyle:{
            // color:self.colors[idx],
            width:1,
          },
          areaStyle: {
            // color:self.colors[idx],
            opacity:0.2
          },
          showSymbol: false,
          hoverAnimation: false,
          data: lineData
        }]
      }

      return option

    },
    // 出入网曲线option
    getNetLineChartOption(lineData) {

      let option = {
        color: ['#d83f87', '#c6c433', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        grid:{
          x: 60,
          y: 20,
          x2: 25,
          y2: 20,
          borderWidth: 0,
          show: true,
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        },
        tooltip: {
          trigger: 'item',
        },
        xAxis: [
        {
          type: 'time',// 时间
          splitLine: {
            show: true,
            lineStyle:{
              color: '#789',
              type: 'dotted',
              width: 1
            }
          },
          axisLine:{ // 设置x轴线的样式
            lineStyle:{
              color: '#a4b3b6',
              width: 1
            }
          },
          axisLabel: { // 设置x轴数值的样式
            show: true,
          }
        }],
        yAxis: [
        {
          type: 'value',
          boundaryGap: [0, '100%'],// 坐标轴两侧的边界
          splitLine: {
            show: true,
            lineStyle:{
              color: '#789',
              type: 'dotted',
              width: 1
            }
          },
          axisLine:{ // 设置y轴线的样式
            lineStyle:{
              color: '#a4b3b6',
              width: 1
            }
          },
          axisLabel: { // 设置y轴数值的样式
            show: true,
            // fontWeight:'bold',
            formatter: function(value){ // 设置y轴数值显示方式
              return value + ' Mbps'
            },
          },

        }],
        series: [{
          xAxisIndex: 0,
          yAxisIndex: 0,
          type: 'line',
          stack: '总量',
          lineStyle:{
            // color:'#d83f87',
            width:1,
          },
          areaStyle: {
            // color:'#d83f87',
            opacity:0.2
          },
          showSymbol: false,
          hoverAnimation: false,
          data: lineData
        }]
      }
      return option
    },
  }
};
</script>
<template>
<div v-if="host">
  <div v-if="host.cpu_series" class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">CPU</h5>
      <v-chart :options="getLineChartOption(host.cpu_series)" autoresize/>
    </div>
  </div>
  <div v-if="gpu_series" class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">GPU</h5>
      <v-chart ref="gpuChart" :options="getLineChartOption(gpu_series)" autoresize/>
    </div>
  </div>
  <div v-if="mlu_series" class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">MLU</h5>
      <v-chart ref="mluChart" :options="getLineChartOption(host.mlu_series)" autoresize/>
    </div>
  </div>
  <div v-if="host && host.network_series" class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">Network</h5>
      <v-chart ref="netChart" :options="getNetLineChartOption(host.network_series)" autoresize/>
    </div>
  </div>
    
    <!-- <div v-if="!host.cpu_series && !host.gpu_series && !host.mlu_series && !host.network_series">暂无数据</div> -->
</div>
</template>
<style scoped>
.echarts {
  width: 100%;
  height: 25vh;
}
</style>