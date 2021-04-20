<script>
/**
 * Container Detail component
 */
export default {
  components: {  },
  props: {
    container: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      series: [76],
      chartOptions: {
        chart: {
          height: 150,
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#556ee6"],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
            },
            hollow: {
              size: "60%",
            },

            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "16px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        stroke: {
          dashArray: 3,
        },
        labels: ["Storage"],
      },
    };
  },
  
};
</script>
<template>
  <div v-if="container" class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-6">

          <h4 class="card-title mb-3">
            <i class="bx bx-cube me-1"></i>
            {{ container.container_name }}
            <span
              class="badge rounded-pill"
              :class="`bg-${ container.user_host ? 'primary' : 'info' }`"
            >
              {{ container.user_host ? '本地' : '远程' }}
            </span>
          </h4>
          <p class="mb-1">
            <i class="bx bx-layer me-1"></i>镜像
            {{ container.image.name }}
          </p>

          <p class="mb-1">
            <i class="bx bx-chip me-1"></i>内核
            {{ container.cpus }}
          </p>

          <p class="mb-1">
              <i class="bx bx-grid-alt me-1"></i>内存
            {{ container.mem }}GB
          </p>
          <p class="mb-1">
            <i class="bx bx-chip me-1"></i>GPU {{ container.gpu_enabled ? '有':'无' }}
          </p>
        </div>
        <div class="col-6">
          <div class="row">
            
            <div class="col text-center">
              <h5 class="font-size-15 mb-4">CPU</h5>
              <apexchart
                class="apex-charts"
                type="radialBar"
                height="150"
                dir="ltr"
                :series="[container.cpu_usage]"
                :options="chartOptions"
              ></apexchart>

              <!-- <p class="text-muted mt-4">48.02 GB (76%) of 64 GB used</p> -->
            </div>

            <div class="col text-center">
              <h5 class="font-size-15 mb-4">MEM</h5>
              <apexchart
                class="apex-charts"
                type="radialBar"
                height="150"
                dir="ltr"
                :series="[container.mem_usage]"
                :options="chartOptions"
              ></apexchart>

              <!-- <p class="text-muted mt-4">48.02 GB (76%) of 64 GB used</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>