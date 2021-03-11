const earningLineChart = {
    series: [{
        name: 'series1',
        data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76]
    }],
    chartOptions: {
        chart: {
            height: 320,
            type: 'line',
            toolbar: 'false',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 8,
                opacity: 0.2
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#556ee6'],
        stroke: {
            curve: 'smooth',
            width: 3,
        },
    }
};

const salesAnalyticsDonutChart = {
    series: [56, 38, 26],
    chartOptions: {
        chart: {
            type: 'donut',
            height: 240,
        },
        labels: ['Series A', 'Series B', 'Series C'],
        colors: ['#556ee6', '#34c38f', '#f46a6a'],
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                }
            }
        }
    }
};

const ChatData = [
    {
        id: 1,
        name: 'Steven Franklin',
        message: 'Hello!',
        time: '10:00',
    },
    {
        id: 2,
        align: 'right',
        name: 'Henry Wells',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        id: 3,
        name: 'Steven Franklin',
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        id: 4,
        name: 'Steven Franklin',
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        id: 5,
        align: 'right',
        name: 'Henry Wells',
        message: "Wow that's great",
        time: '10:02'
    },
]

export { earningLineChart, salesAnalyticsDonutChart, ChatData };
