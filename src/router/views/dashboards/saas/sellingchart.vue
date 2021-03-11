<script>
export default {
  props: {
    Chartcolor: {
      type: String,
      default: ""
    },
    seriesvalue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      chartData: {
        series: [100, this.seriesvalue],
        chartOptions: {
          chart: {
            type: "donut"
          },
          dataLabels: {
            enabled: false
          },
          tooltip: {
            enabled: false
          },
          legend: {
            show: false
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: false
                },
                size: "65%"
              }
            }
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 100
                }
              }
            }
          ],
          colors: [this.Chartcolor, "#f8f9fa"]
        }
      }
    };
  }
};
</script>

<template>
  <apexchart
    class="apex-charts"
    dir="ltr"
    height="85"
    width="85"
    :series="chartData.series"
    :options="chartData.chartOptions"
  ></apexchart>
</template>
