const tasksChart = {
    series: [{
        name: 'Complete Tasks',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 52, 21, 44, 22, 30]
    },
    {
        name: 'All Tasks',
        type: 'line',
        data: [23, 11, 34, 27, 17, 22, 62, 32, 44, 22, 39]
    }],
    chartOptions: {
        chart: {
            stacked: false,
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '20%',
                endingShape: 'rounded'
            }
        },
        colors: ['#556ee6', '#34c38f'],
        fill: {
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        markers: {
            size: 0
        },
        yaxis: {
            min: 0
        },
    }
};

const tasks = [
    {
        index: 1,
        taskType: 'upcoming',
        name: 'Create a Skote Dashboard UI',
        images: [require('@/assets/images/users/avatar-2.jpg'), require('@/assets/images/users/avatar-1.jpg')],
        status: 'Waiting',
        checked: false
    },
    {
        index: 2,
        taskType: 'upcoming',
        name: 'Create a New Landing UI',
        images: [require('@/assets/images/users/avatar-4.jpg'), require('@/assets/images/users/avatar-5.jpg')],
        status: 'Approved',
        checked: true
    },
    {
        index: 3,
        taskType: 'upcoming',
        name: 'Create a Skote Logo',
        images: [require('@/assets/images/users/avatar-1.jpg')],
        status: 'Waiting',
        checked: false
    },
    {
        index: 4,
        taskType: 'inprogress',
        name: 'Brand logo design',
        images: [require('@/assets/images/users/avatar-7.jpg')],
        status: 'Complete',
        checked: true
    },
    {
        index: 5,
        taskType: 'inprogress',
        name: 'Create a Blog Template UI',
        images: [require('@/assets/images/users/avatar-8.jpg'), require('@/assets/images/users/avatar-1.jpg')],
        status: 'Pending',
        checked: false
    },
    {
        index: 6,
        taskType: 'completed',
        name: 'Redesign - Landing page',
        images: [require('@/assets/images/users/avatar-6.jpg')],
        status: 'Complete',
        checked: false
    },
    {
        index: 7,
        taskType: 'completed',
        name: 'Multipurpose Landing',
        images: [require('@/assets/images/users/avatar-7.jpg')],
        status: 'Complete',
        checked: true
    },
    {
        index: 8,
        taskType: 'completed',
        name: 'Create a Blog Template UI',
        images: [require('@/assets/images/users/avatar-4.jpg'), require('@/assets/images/users/avatar-2.jpg')],
        status: 'Complete',
        checked: false
    }
];



export { tasksChart, tasks };