<script>
export default {
  data() {
    return {
      chartData: {
        series: [
          {
            name: "Current",
            data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
          },
          {
            name: "Previous",
            data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
          },
        ],
        chartoptions: {
          chart: {
            height: 350,
            type: "area",
            toolbar: {
              show: false,
            },
          },
          colors: ["#556ee6", "#f1b44c"],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100],
            },
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          markers: {
            size: 3,
            strokeWidth: 3,

            hover: {
              size: 4,
              sizeOffset: 2,
            },
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
          },
        },
      },
    };
  },
};
</script>

<template>
  <div class="card-body">
    <div class="d-flex flex-wrap">
      <h5 class="card-title me-2">Visitors</h5>
      <div class="ms-auto">
        <div class="toolbar button-items text-end">
          <button type="button" class="btn btn-light btn-sm">ALL</button>
          <button type="button" class="btn btn-light btn-sm">1M</button>
          <button type="button" class="btn btn-light btn-sm">6M</button>
          <button type="button" class="btn btn-light btn-sm active">1Y</button>
        </div>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-lg-4">
        <div class="mt-4">
          <p class="text-muted mb-1">Today</p>
          <h5>1024</h5>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="mt-4">
          <p class="text-muted mb-1">This Month</p>
          <h5>
            12356
            <span class="text-success font-size-13"
              >0.2 % <i class="mdi mdi-arrow-up ms-1"></i
            ></span>
          </h5>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="mt-4">
          <p class="text-muted mb-1">This Year</p>
          <h5>
            102354
            <span class="text-success font-size-13"
              >0.1 % <i class="mdi mdi-arrow-up ms-1"></i
            ></span>
          </h5>
        </div>
      </div>
    </div>

    <hr class="mb-4" />

    <apexchart
      class="apex-charts"
      dir="ltr"
      height="350"
      :series="chartData.series"
      :options="chartData.chartoptions"
    ></apexchart>
  </div>
</template>