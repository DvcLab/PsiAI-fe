function generateDayWiseTimeSeries(baseval, count, yrange) {
  let i = 0
  const series = []
  while (i < count) {
    const x = baseval
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push([x, y])
    baseval += 86400000
    i++
  }
  return series
}

function generateData(baseval, count, yrange) {
  let i = 0
  const series = []
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

    series.push([x, y, z])
    baseval += 86400000
    i++
  }
  return series
}

function generateData1(baseval1, count, yrange) {
  let i = 0
  const series = []
  while (i < count) {
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

    series.push([baseval1, y, z])
    baseval1 += 86400000
    i++
  }
  return series
}

const linewithDataChart = {
  chartOptions: {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#5369f8', '#43d39e'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: [3, 3],
      curve: 'smooth',
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.2,
      },
      borderColor: '#f1f3fa',
    },
    markers: {
      style: 'inverted',
      size: 6,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: 'Month',
      },
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    yaxis: {
      title: {
        text: 'Temperature',
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
  series: [
    {
      name: 'High - 2018',
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: 'Low - 2018',
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ],
}

const gradientLineChart = {
  chartOptions: {
    chart: {
      shadow: {
        enabled: false,
        color: '#bbb',
        top: 3,
        left: 2,
        blur: 3,
        opacity: 1,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
    stroke: {
      width: 5,
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
        '12/11/2000',
        '1/11/2001',
        '2/11/2001',
        '3/11/2001',
        '4/11/2001',
        '5/11/2001',
        '6/11/2001',
      ],
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    title: {
      text: 'Social Media',
      align: 'left',
      style: {
        fontSize: '14px',
        color: '#666',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#43d39e'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      opacity: 0.9,
      colors: ['#50a5f1'],
      strokeColor: '#fff',
      strokeWidth: 2,
      style: 'inverted', // full, hollow, inverted
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: -10,
      max: 40,
      title: {
        text: 'Engagement',
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
  series: [
    {
      name: 'Likes',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
}

const stackedAreaChart = {
  chartOptions: {
    chart: {
      stacked: true,
      events: {
        selection(chart, e) {
          console.log(new Date(e.xaxis.min))
        },
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#5369f8', '#43d39e', '#f77e53'],
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
    stroke: {
      width: [3, 3, 3],
      curve: 'smooth',
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
  },
  series: [
    {
      name: 'South',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'North',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 20,
        }
      ),
    },
    {
      name: 'Central',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 15,
        }
      ),
    },
  ],
}

const basicColumChart = {
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    colors: ['#5369f8', '#43d39e', '#f77e53'],
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    legend: {
      offsetY: -10,
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.2,
      },
      borderColor: '#f1f3fa',
    },
    tooltip: {
      y: {
        formatter(val) {
          return '$ ' + val + ' thousands'
        },
      },
      theme: 'dark',
      x: { show: false },
    },
  },
  series: [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
}

const columnlabelChart = {
  series: [
    {
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ['#5369f8'],
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => {
        return val + '%'
      },
      offsetY: -30,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      position: 'top',
      labels: {
        offsetY: -18,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
        offsetY: -35,
      },
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
    fill: {
      gradient: {
        enabled: false,
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100],
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: (val) => {
          return val + '%'
        },
      },
    },
    title: {
      text: 'Monthly Inflation in Argentina, 2002',
      floating: true,
      offsetY: 350,
      align: 'center',
      style: {
        color: '#444',
      },
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.2,
      },
      borderColor: '#f1f3fa',
    },
  },
}

const mixedChart = {
  series: [
    {
      name: 'Team A',
      type: 'area',
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: 'Team B',
      type: 'line',
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ['#5369f8', '#43d39e'],
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    fill: {
      type: 'solid',
      opacity: [0.35, 1],
    },
    labels: [
      'Dec 01',
      'Dec 02',
      'Dec 03',
      'Dec 04',
      'Dec 05',
      'Dec 06',
      'Dec 07',
      'Dec 08',
      'Dec 09 ',
      'Dec 10',
      'Dec 11',
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    yaxis: [
      {
        title: {
          text: 'Series A',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Series B',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points'
          }
          return y
        },
      },
      theme: 'dark',
      x: { show: false },
    },
  },
}

const basicBarChart = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    colors: ['#5369f8'],
    xaxis: {
      // tslint:disable-next-line: max-line-length
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'Germany',
      ],
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    states: {
      hover: {
        filter: 'none',
      },
    },
    grid: {
      borderColor: '#f1f3fa',
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
  },
}

const nagativeValueBarChart = {
  series: [
    {
      name: 'Males',
      data: [
        0.4,
        0.65,
        0.76,
        0.88,
        1.5,
        2.1,
        2.9,
        3.8,
        3.9,
        4.2,
        4,
        4.3,
        4.1,
        4.2,
        4.5,
        3.9,
        3.5,
        3,
      ],
    },
    {
      name: 'Females',
      data: [
        -0.8,
        -1.05,
        -1.06,
        -1.18,
        -1.4,
        -2.2,
        -2.85,
        -3.7,
        -3.96,
        -4.22,
        -4.3,
        -4.4,
        -4.1,
        -4,
        -4.1,
        -3.4,
        -3.1,
        -2.8,
      ],
    },
  ],
  chartOptions: {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ['#5369f8', '#43d39e'],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },

    grid: {
      xaxis: {
        showLines: false,
      },
      borderColor: '#f1f3fa',
    },
    yaxis: {
      min: -5,
      max: 5,
      title: {
        // text: 'Age',
      },
    },
    tooltip: {
      theme: 'dark',
      shared: false,
      x: { show: false },
      y: {
        formatter(val) {
          return Math.abs(val) + '%'
        },
      },
    },
    xaxis: {
      // tslint:disable-next-line: max-line-length
      categories: [
        '85+',
        '80-84',
        '75-79',
        '70-74',
        '65-69',
        '60-64',
        '55-59',
        '50-54',
        '45-49',
        '40-44',
        '35-39',
        '30-34',
        '25-29',
        '20-24',
        '15-19',
        '10-14',
        '5-9',
        '0-4',
      ],
      title: {
        text: 'Percent',
      },
      labels: {
        formatter(val) {
          return Math.abs(Math.round(val)) + '%'
        },
      },
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    legend: {
      offsetY: -10,
    },
  },
}

const lineColumAreaChart = {
  series: [
    {
      name: 'Team A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: 'Team B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: 'Team C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ],
  chartOptions: {
    chart: {
      padding: {
        right: 0,
        left: 0,
      },
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 2, 4],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
    colors: ['#5369f8', '#43d39e', '#f77e53'],
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    // tslint:disable-next-line: max-line-length
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003',
    ],
    markers: {
      size: 0,
    },
    legend: {
      offsetY: -10,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    yaxis: {
      title: {
        text: 'Points',
      },
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
      shared: true,
      intersect: false,
      y: {
        formatter(y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points'
          }
          return y
        },
      },
    },
    grid: {
      borderColor: '#f1f3fa',
    },
  },
}

const multipleYAxisChart = {
  series: [
    {
      name: 'Income',
      type: 'column',
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
    {
      name: 'Cashflow',
      type: 'column',
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
    },
    {
      name: 'Revenue',
      type: 'line',
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ],
  chartOptions: {
    chart: {
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 0, 3],
    },
    colors: ['#5369f8', '#43d39e', '#f77e53'],
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#675db7',
        },
        labels: {
          style: {
            color: '#675db7',
          },
        },
        title: {
          text: 'Income (thousand crores)',
        },
      },
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#23b397',
        },
        labels: {
          style: {
            color: '#23b397',
          },
          offsetX: 10,
        },
        title: {
          text: 'Operating Cashflow (thousand crores)',
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#e36498',
        },
        labels: {
          style: {
            color: '#e36498',
          },
        },
        title: {
          text: 'Revenue (thousand crores)',
        },
      },
    ],
    tooltip: {
      theme: 'dark',
      x: { show: false },
      followCursor: true,
      y: {
        formatter(y) {
          if (typeof y !== 'undefined') {
            return y + ' thousand crores'
          }
          return y
        },
      },
    },
    grid: {
      borderColor: '#f1f3fa',
    },
    legend: {
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          yaxis: {
            show: false,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
}

const simpleBubbleChart = {
  series: [
    {
      name: 'Bubble 1',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble 2',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble 3',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0.8,
      gradient: {
        enabled: false,
      },
    },
    colors: ['#5369f8', '#43d39e', '#f77e53'],
    xaxis: {
      tickAmount: 12,
      type: 'category',
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    yaxis: {
      max: 70,
    },
    grid: {
      borderColor: '#f1f3fa',
    },
    legend: {
      offsetY: -10,
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
  },
}

const dBubbleChart = {
  series: [
    {
      name: 'Product 1',
      data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Product 2',
      data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Product 3',
      data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Product 4',
      data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ['#5369f8', '#43d39e', '#f77e53'],
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
    },
    xaxis: {
      tickAmount: 12,
      type: 'datetime',

      labels: {
        rotate: 0,
      },
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    yaxis: {
      max: 70,
    },
    legend: {
      offsetY: -10,
    },
    grid: {
      borderColor: '#f1f3fa',
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
  },
}

const scatterXYChart = {
  series: [
    {
      name: 'Sample A',
      data: [
        [16.4, 5.4],
        [21.7, 2],
        [25.4, 3],
        [19, 2],
        [10.9, 1],
        [13.6, 3.2],
        [10.9, 7.4],
        [10.9, 0],
        [10.9, 8.2],
        [16.4, 0],
        [16.4, 1.8],
        [13.6, 0.3],
        [13.6, 0],
        [29.9, 0],
        [27.1, 2.3],
        [16.4, 0],
        [13.6, 3.7],
        [10.9, 5.2],
        [16.4, 6.5],
        [10.9, 0],
        [24.5, 7.1],
        [10.9, 0],
        [8.1, 4.7],
        [19, 0],
        [21.7, 1.8],
        [27.1, 0],
        [24.5, 0],
        [27.1, 0],
        [29.9, 1.5],
        [27.1, 0.8],
        [22.1, 2],
      ],
    },
    {
      name: 'Sample B',
      data: [
        [6.4, 13.4],
        [1.7, 11],
        [5.4, 8],
        [9, 17],
        [1.9, 4],
        [3.6, 12.2],
        [1.9, 14.4],
        [1.9, 9],
        [1.9, 13.2],
        [1.4, 7],
        [6.4, 8.8],
        [3.6, 4.3],
        [1.6, 10],
        [9.9, 2],
        [7.1, 15],
        [1.4, 0],
        [3.6, 13.7],
        [1.9, 15.2],
        [6.4, 16.5],
        [0.9, 10],
        [4.5, 17.1],
        [10.9, 10],
        [0.1, 14.7],
        [9, 10],
        [12.7, 11.8],
        [2.1, 10],
        [2.5, 10],
        [27.1, 10],
        [2.9, 11.5],
        [7.1, 10.8],
        [2.1, 12],
      ],
    },
    {
      name: 'Sample C',
      data: [
        [21.7, 3],
        [23.6, 3.5],
        [24.6, 3],
        [29.9, 3],
        [21.7, 20],
        [23, 2],
        [10.9, 3],
        [28, 4],
        [27.1, 0.3],
        [16.4, 4],
        [13.6, 0],
        [19, 5],
        [22.4, 3],
        [24.5, 3],
        [32.6, 3],
        [27.1, 4],
        [29.6, 6],
        [31.6, 8],
        [21.6, 5],
        [20.9, 4],
        [22.4, 0],
        [32.6, 10.3],
        [29.7, 20.8],
        [24.5, 0.8],
        [21.4, 0],
        [21.7, 6.9],
        [28.6, 7.7],
        [15.4, 0],
        [18.1, 0],
        [33.4, 0],
        [16.4, 0],
      ],
    },
  ],
  chartOptions: {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#5369f8', '#43d39e', '#f77e53'],
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: (val) => {
          return parseFloat(val).toFixed(1)
        },
      },
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    yaxis: {
      tickAmount: 7,
    },
    grid: {
      borderColor: '#f1f3fa',
    },
    legend: {
      offsetY: -10,
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
}

const scatterChart = {
  series: [
    {
      name: 'Team 1',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'Team 2',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'Team 3',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'Team 4',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        10,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'Team 5',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },
  ],
  chartOptions: {
    chart: {
      zoom: {
        type: 'xy',
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#5369f8', '#43d39e', '#f77e53', '#1ce1ac', '#25c2e3', '#ffbe0b'],
    grid: {
      borderColor: '#f1f3fa',
      xaxis: {
        showLines: true,
      },
      yaxis: {
        showLines: true,
      },
    },
    legend: {
      offsetY: -10,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: '#d6ddea',
      },
      axisTicks: {
        color: '#d6ddea',
      },
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
    yaxis: {
      max: 70,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
}

const simplePieChart = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
    colors: ['#5369f8', '#43d39e', '#f77e53', '#1ce1ac', '#25c2e3'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: -10,
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
}

const gradientDonutChart = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: -10,
    },
    dataLabels: {
      enabled: false,
    },
    labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
    colors: ['#5369f8', '#43d39e', '#f77e53', '#1ce1ac', '#25c2e3'],
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    fill: {
      type: 'gradient',
    },
  },
}

const patternedDonutChart = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    chart: {
      dropShadow: {
        enabled: true,
        color: '#111',
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: {
      show: true,
      width: 2,
    },
    colors: ['#5369f8', '#43d39e', '#f77e53', '#1ce1ac', '#25c2e3'],
    labels: ['Comedy', 'Action', 'SciFi', 'Drama', 'Horror'],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8,
      },
      enabled: false,
    },
    fill: {
      type: 'pattern',
      opacity: 1,
      pattern: {
        enabled: true,
        style: [
          'verticalLines',
          'squares',
          'horizontalLines',
          'circles',
          'slantedLines',
        ],
      },
    },
    states: {
      hover: {
        enabled: false,
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
}

const basicRadialBarChart = {
  chartOptions: {
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
      },
    },
    colors: ['#5369f8'],
    labels: ['CRICKET'],
  },
  series: [70],
}

const multipleRadialBars = {
  chartOptions: {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter(w) {
              // tslint:disable-next-line: max-line-length
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            },
          },
        },
      },
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    colors: ['#5369f8', '#43d39e', '#f77e53', '#1ce1ac'],
  },
  series: [44, 55, 67, 83],
}

const strokedCircularGuage = {
  chartOptions: {
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter(val) {
              return val + '%'
            },
          },
        },
      },
    },
    fill: {
      gradient: {
        enabled: true,
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    colors: ['#f46a6a'],
    labels: ['Median Ratio'],
    responsive: [
      {
        breakpoint: 380,
        options: {
          chart: {
            height: 280,
          },
        },
      },
    ],
  },
  series: [67],
}
export {
  linewithDataChart,
  gradientLineChart,
  stackedAreaChart,
  basicColumChart,
  columnlabelChart,
  mixedChart,
  basicBarChart,
  nagativeValueBarChart,
  lineColumAreaChart,
  multipleYAxisChart,
  simpleBubbleChart,
  dBubbleChart,
  scatterXYChart,
  scatterChart,
  simplePieChart,
  gradientDonutChart,
  patternedDonutChart,
  basicRadialBarChart,
  multipleRadialBars,
  strokedCircularGuage,
}
