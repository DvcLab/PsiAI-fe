<script>
/**
 * Container Header component
 */
export default {
  components: {},
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
  <div class="row">
    <div class="col-12">
      <div class="row w-100">

        <div class="col-12 col-md-3">
          <h4 class="card-title mb-3">
            <i class="bx bx-cube me-1"></i>
            {{ container.container_name }}
            <span
              class="badge rounded-pill"
              :class="`bg-${container.user_host ? 'primary' : 'info'}`"
            >
              {{ container.user_host ? "本地" : "远程" }}
            </span>
          </h4>
        </div>

        <div class="col-12 col-md-3">
          <span class="d-block text-truncate mb-0">
            <i class="bx bx-layer me-1"></i>镜像
            {{ container.image.name }}
          </span>
        </div>

        <div class="col-12 col-md-3">
          <span class="d-block text-truncate mb-0">
            <i class="bx bx-chip me-1"></i>GPU
            {{ container.gpu_enabled ? "有" : "无" }}
          </span>
        </div>

      </div>
    </div>

    <div class="col-12">
      <div class="row">
        <div class="col-6 col-md-3 mb-2">
          <span class="badge rounded-pill bg-primary me-2">
            <i class="bx bx-chip me-1"></i>内核
          </span>
          {{ container.cpus }}
        </div>
        <div class="col-6 col-md-3 mb-2">
          <span class="badge rounded-pill bg-primary me-2">
            <i class="bx bx-grid-alt me-1"></i>内存
          </span>
          {{ container.mem }}GB
        </div>
      </div>
    </div>
  </div>
</template>