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
      
    };
  },
  computed: {
    
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
        series: []
      }
      
      lineData.forEach(item=>{

        let lineOption = {
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
          data: item
        }
        option.series.push(lineOption)
      })
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
              return value + ' MB'
            },
          },

        }],
        series: []
      }

      lineData.forEach((item)=>{
        let lineOption = {
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
          data: item
        }
        option.series.push(lineOption)
      })
      return option
    },
  }
};
</script>
<template>
  <div>
    <div class="con" v-if="host.cpu_series">
      <p class="text-primary">CPU</p>
      <v-chart :options="getLineChartOption(host.cpu_series)"/>
    </div>
    <hr v-if="host.cpu_series" class="my-4">
    <div v-if="host.gpu_series">
      <p class="text-primary">GPU</p>
      <v-chart :options="getLineChartOption(host.gpu_series)"/>
    </div>
    <hr v-if="host.gpu_series" class="my-4">
    <div v-if="host.mlu_series">
      <p class="text-primary">MLU</p>
      <v-chart :options="getLineChartOption(host.mlu_series)"/>
    </div>
    <hr v-if="host.mlu_series" class="my-4">
    <div v-if="host.network_series">
      <p class="text-primary">Network</p>
      <v-chart :options="getNetLineChartOption(host.network_series)"/>
    </div>
    
    <div v-if="!host.cpu_series && !host.gpu_series && !host.mlu_series && !host.network_series">暂无数据</div>
  </div>
</template>
<style scoped>
hr:last-child {
  display: none;
}
</style>