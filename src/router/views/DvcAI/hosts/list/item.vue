<script>
import LoaderContainer from "@/components/DvcAI/loader-container";
import GpuCard from "@/components/DvcAI/hosts/gpu-card";
import MluCard from "@/components/DvcAI/hosts/mlu-card";
import ECharts from "vue-echarts";
import "echarts/lib/chart/gauge";

export default {
  components: { GpuCard, MluCard, LoaderContainer,"v-chart": ECharts},
  props: {
    host: {
      type: Object,
      default: () => {},
    },
  },
  filters: {
    // id取前8位
    preId(id){
      return id.slice(0,8)
    },
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
      websock: null,
      hostSelfData: this.host,
      loadingState: false,
    };
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
      return Math.floor(this.hostSelfData.cpu_info.io_wait * 10000) / 100;
    },
    cpuUsage() {
      return Math.floor(this.hostSelfData.cpu_info.usage * 100 * 100) / 100;
    },
    memUsage() {
      return Math.floor(this.hostSelfData.mem_info.usage * 100 * 100) / 100;
    },
  },
  mounted() {
    // 连接ws
    this.initWebSocket()
  },
  destroyed() {
    // 退出关闭ws
    this.websock.close()
  },
  methods: {
    // chartsOption参数设置
    // getChartOptions(value, label, symbol) {
    //   let color = this.percent2color(value / 100, 0.35, 1);

    //   return {
    //     plotOptions: {
    //       radialBar: {
    //         hollow: {
    //           margin: 0,
    //           size: "70%",
    //         },
    //         track: {
    //           margin: 0,
    //         },
    //         dataLabels: {
    //           name: {
    //             fontSize: "0.6rem"
    //           },
    //           value: {
    //             fontSize: "0.5rem",
    //             formatter: function (val) {
    //               return val + symbol;
    //             },
    //           },
    //         },
    //       },
    //     },
    //     colors: [color],
    //     labels: [label],
    //   };
    // },
    // chartsOption参数设置
    getChartOptions(value, title) {
      return {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                restore: { title: "Refresh" },
                saveAsImage: { title: "Download Image" }
            }
        },
        series: [
            {
                name: '3刻度',
                type: 'gauge',//仪表盘
                radius: '100%',//仪表盘半径
                center: ['50%', '60%'],//仪表盘位置
                startAngle:190,//起始角度
                endAngle: -10,//结束角度
                title: {
                    offsetCenter: [0,"-30%"],
                    fontSize:10,
                },
                detail: { 
                    formatter: '{value}%',
                    textStyle: {
                        fontSize: 10,
                    },
                    rich: {
                        name: {
                            fontSize:10
                        }
                    }
                },
                //仪表盘轴线相关配置，彩色的条条有多宽，用什么颜色
                axisLine: {
                    lineStyle: {
                        //color: [[0.2, '#34c38f'], [0.8, '#556ee6'], [1, '#f46a6a']],
                        //color: [[0.2, '#34c38f'], [0.8, '#556ee6'], [1, '#f1b44c']],
                        color: [[0.2, '#34c38f'], [0.8, '#556ee6'], [1, '#f1b44c']],
                        width: 8,
                    }
                },
                splitNumber: 5,//每大格内分隔线数量
                splitLine: {//分隔线样式相关
                    length: 12,//分割线的长度
                    lineStyle: {
                        width:2,
                        //color:'#b0b3b8'
                    }
                },
                axisLabel: {//大刻度标签。
                    show:false
                },
                axisTick:{//小刻度相关
                    show:true
                },
                pointer:{//指针长度与宽度
                    width:3,
                    length:'70%'
                },
                //表盘名字
                data: [{ 
                    value: value, 
                    name: title,
                }]
            }
        ]
          
    };
  },

    // 跳转主机详情页
    toHostDetail(e){
      let target = e.target;
      if(target.matches('h4') || target.matches('span') || target.matches('a') || target.matches('i')) {
        console.log('不可跳转')
        return;
      } else {
        return this.$router.push({ path: '/hosts/' + this.host.id })
        // console.log('可以跳转详情页')
      }
    },

    // 初始化weosocket
    initWebSocket() {
      const wsuri =
        process.env.VUE_APP_WS_URL + "_hosts?id=" + this.host.id;
      this.websock = new WebSocket(wsuri, this.$keycloak.token);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },

    // 连接建立之后执行send方法发送数据
    websocketonopen() {},

    // 连接建立失败重连
    websocketonerror() {
      this.initWebSocket();
    },

    // 数据接收
    websocketonmessage(res) {
      const message = JSON.parse(res.data);
      this.hostSelfData = { ...this.hostSelfData, ...message }
    },

    // 数据发送
    websocketsend(data) {
      this.websock.send(data);
    },

    // 关闭
    websocketclose(e) {
      console.log("websocket error, ", e);
    },

    // hsl转rgb,h:色相，s:饱和度，l:亮度
    hsl2rgb(h, s, l) {
      let r, g, b;

      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = this.hue2rgb(p, q, h + 1 / 3);
        g = this.hue2rgb(p, q, h);
        b = this.hue2rgb(p, q, h - 1 / 3);
      }

      return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
    },

    // hue转rgb
    hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    },

    // 百分比转颜色，i介于0和1之间，min设置i颜色范围的最小值及max最大值，可调整参数使颜色效果更合适
    percent2color(i, min, max) {
      let ratio = i;

      if (min > 0 || max < 1) {
        if (i < min) {
          ratio = 0;
        } else if (i > max) {
          ratio = 1;
        } else {
          let range = max - min;
          ratio = (i - min) / range;
        }
      }

      // hue中, red = 0° and green = 120°, 参数可以稍微调整一下，调到合适的值
      let hue = ((max - ratio) * 110) / 360;
      let rgb = this.hsl2rgb(hue, 0.95, 0.65);

      return "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
    },
  },
};
</script>

<template>
  <LoaderContainer v-if="host.status !== 'STOPPED'" :loading="loadingState">
    <div class="list-item-con" @click="toHostDetail" style="padding-bottom:0.3rem">
      <div class="row">
        <div class="col-12 col-md-6">
          <!--<h4 class="d-block text-truncate text-dark mb-0 list-item-name">-->
          <h4>
            <i class="bx bx-server me-1"></i>
            <span class="me-2"> {{ hostSelfData.ip }}</span>
            <span class="text-secondary font-size-13">（{{ hostSelfData.id | preId }}）</span>
            <span 
              class="d-md-none badge"
              :class="{
                'bg-success': running,
                'bg-danger': !running,
              }">
              <span v-if="hostSelfData.status === 'RUNNING'">
                运行中
              </span>
              <span v-else>
                已删除
              </span>
            </span>
          </h4>
        </div>

        <div class="col-12 col-md-6">
          <div class="float-start float-md-end">
            <span 
              class="badge me-2"
              :class="{
                'bg-success': running,
                'bg-danger': !running,
              }">
              <span v-if="hostSelfData.status === 'RUNNING'">
                运行中
              </span>
              <span v-else>
                已删除
              </span>
            </span>
            <span v-if="hostSelfData.status === 'RUNNING'" class="text-success">{{
              updateTime | moment("YYYY-MM-DD HH:mm:ss")
            }}</span>
            <span v-else class="text-danger">{{
              updateTime | moment("YYYY-MM-DD HH:mm:ss")
            }}</span>
          </div>
        </div>
      </div>

      <div class="row">
        <!--列表item左半部分，主机名，内存，内核等信息加下面的使用情况表盘-->
        <div class="col-md-7">
          <div class="row mb-1">
            <div
              v-if="!this.$_.isNil(hostSelfData.cpu_info.cpu_model_name)"
              class="col-sm-12 col-md-8 mb-2"
              style="font-weight: bold"
            >
              <span>{{ hostSelfData.cpu_info.cpu_model_name }}</span>
            </div>
            <div
              v-if="!this.$_.isNil(hostSelfData.cpu_info.cpu_num)"
              class="col-sm-6 col-md-4 mb-2 text-truncate"
            >
              <span class="badge rounded-pill bg-primary">
                <i class="bx bx-chip me-1" />内核
              </span>
              <span> {{ hostSelfData.cpu_info.cpu_num }}</span>
            </div>
            <div
              v-if="!this.$_.isNil(hostSelfData.mem_info.total)"
              class="col-sm-6 col-md-3 mb-2 text-truncate"
            >
              <span class="badge rounded-pill font-size-11 badge-soft-primary">
                <i class="bx bx-grid-alt me-1" />内存
              </span>
              <span> {{ hostSelfData.mem_info.total | gbFiltertoNum }} {{ hostSelfData.mem_info.total | gbFiltertoUnit }}</span>
            </div>
            <div
              v-if="!this.$_.isNil(hostSelfData.container_num)"
              class="col-sm-6 col-md-2 mb-2"
              style="white-space: nowrap;"
            >
              <span class="badge rounded-pill font-size-11 badge-soft-primary">
                <i class="bx bx-cube me-1" />容器
              </span>
              <span> {{ hostSelfData.container_num }}</span>
            </div>
            
            <div
              v-if="!this.$_.isNil(hostSelfData.gpu_info)"
              class="col-sm-6 col-md-3 mb-2 text-truncate"
            >
              <span class="badge rounded-pill font-size-11 badge-soft-warning">
                <i class="bx bx-command" /> CUDA
                {{ hostSelfData.gpu_info.cuda_version }}</span
              >
            </div>
            <div
              v-if="!this.$_.isNil(hostSelfData.gpu_info)"
              class="col-sm-6 col-md-4 mb-2 text-truncate"
            >
              <span class="badge rounded-pill font-size-11 badge-soft-success">
                <i class="bx bx-server" /> Nvidia Driver
                {{ hostSelfData.gpu_info.driver_version }}</span
              >
            </div>
          </div>
          <div class="row">
            <span class="col-sm-3 col-md-3">
              <!-- <apexchart
                class="apex-charts"
                height="120"
                type="radialBar"
                :series="[cpuIOWait]"
                :options="getChartOptions(cpuIOWait, 'IO wait', '%')"
              ></apexchart> -->
              <v-chart 
                style="width: 120px ; height: 80px"
                :options="getChartOptions(
                    cpuIOWait,
                    'IO wait'
                  )"/>
            </span>
            <span class="col-sm-3 col-md-3">
              <!-- <apexchart
                class="apex-charts"
                height="120"
                type="radialBar"
                :series="[cpuUsage]"
                :options="getChartOptions(cpuUsage, 'CPU usage', '%')"
              ></apexchart> -->
              <v-chart 
                style="width: 120px ; height: 80px"
                :options="getChartOptions(
                    cpuUsage,
                    'CPU usage'
                  )"/>
            </span>
            <span class="col-sm-3 col-md-3">
              <!-- <apexchart
                class="apex-charts"
                height="120"
                type="radialBar"
                :series="[hostSelfData.cpu_info.max_temp]"
                :options="
                  getChartOptions(
                    hostSelfData.cpu_info.max_temp,
                    'CPU temp',
                    '℃'
                  )
                "
              ></apexchart> -->
              <v-chart 
                style="width: 120px ; height: 80px"
                :options="getChartOptions(
                    hostSelfData.cpu_info.max_temp,
                    'CPU temp'
                  )"/>
            </span>
            <span class="col-sm-3 col-md-3">
              <!--<apexchart
                class="apex-charts"
                height="120"
                type="radialBar"
                :series="[memUsage]"
                :options="getChartOptions(memUsage, 'MEM usage', '%')"
              ></apexchart>-->
              <v-chart 
                style="width: 120px ; height: 80px"
                :options="getChartOptions(
                    memUsage,
                    'MEM usage'
                  )"/>
            </span>
          </div>
        </div>

        <!--列表item右半部分，显示各CPU,GPU使用情况-->
        <div class="col-md-5">
          <div v-if="!this.$_.isNil(hostSelfData.gpu_info)" class="row carousel-vertical">
            <GpuCard
              class="col-md-12 col-xl-12 mt-2"
              v-for="(gpu, index) in hostSelfData.gpu_info.gpus"
              :key="index"
              :gpu="gpu"
            />
          </div>
          <div v-if="!this.$_.isNil(hostSelfData.mlu_info)" class="row carousel-vertical">
            <MluCard
              class="col-md-12 col-xl-12 mt-2"
              v-for="(mlu, index) in hostSelfData.mlu_info.mlus"
              :key="index"
              :mlu="mlu"
            />
          </div>
        </div>
      </div>
    </div>
  </LoaderContainer>
</template>



 
 