<script>
/**
 * A stat show case widget to show progress through chart visulization
 */
export default {
  props: {
    chartColor: {
      type: String,
      default: '#5369f8',
    },
    mainTitle: {
      type: String,
      default: '',
    },
    subValue: {
      type: String,
      default: '',
    },
    chartData: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  computed: {
    series: function() {
      return [
        {
          name: this.mainTitle,
          data: [...(this.chartData || [])],
        },
      ]
    },
    chartOptions: function() {
      var labelsSales = []
      for (var i = 1; i <= 10; i++) {
        labelsSales.push('2019-09-' + i)
      }

      return {
        chart: {
          sparkline: {
            enabled: true,
          },
        },
        height: 160,
        stroke: {
          width: 3,
          curve: 'smooth',
        },
        fill: {
          opacity: 0.2,
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          min: 0,
        },
        labels: labelsSales,
        colors: [this.chartColor],
        title: {
          text: this.subValue,
          offsetX: 5,
          offsetY: 10,
          margin: 0,
          style: {
            fontSize: '24px',
          },
        },
        subtitle: {
          text: this.mainTitle,
          offsetX: 5,
          offsetY: 45,
          margin: 0,
          style: {
            fontSize: '16px',
          },
        },
        tooltip: {
          theme: 'dark',
          x: { show: false },
        },
      }
    },
  },
}
</script>

<template>
  <div class="card">
    <div class="card-body p-0">
      <div class="apex-charts" dir="ltr">
        <apexchart
          class="apex-chart-widget"
          type="area"
          height="160"
          :series="series"
          :options="chartOptions"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
