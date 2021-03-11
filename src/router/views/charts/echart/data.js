
import { graphic } from 'echarts/lib/export'

let data1 = [];
for (let i = 0; i <= 360; i++) {
    let t = (i / 180) * Math.PI;
    let r = Math.sin(2 * t) * Math.cos(2 * t);
    data1.push([r, i]);
}

const polarChart = {
    polar: {
        legend: {
            data: ["line"],
            textStyle: {
                color: '#999'
            }
        },
        polar: {
            center: ["50%", "54%"]
        },
        color: ['#34c38f'],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            }
        },
        angleAxis: {
            type: "value",
            startAngle: 0
        },
        radiusAxis: {
            min: 0
        },
        series: [
            {
                coordinateSystem: "polar",
                name: "line",
                type: "line",
                showSymbol: false,
                data: data1
            }
        ],
        animationDuration: 2000
    }
};

const mixedBarChart = {
    // Setup grid
    grid: {
        zlevel: 0,
        x: 80,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        orient: 'center',
        left: 0,
        top: 20,
        feature: {
            dataView: { readOnly: false, title: "Data View" },
            magicType: { type: ['line', 'bar'], title: { line: "For line chart", bar: "For bar chart" } },
            restore: { title: "restore" },
            saveAsImage: { title: "Download Image" }
        }
    },
    color: ['#34c38f', '#556ee6', '#f46a6a'],
    legend: {
        data: ['Evaporation', 'Precipitation', 'Average temperature'],
        textStyle: { color: '#8791af' }
    },
    xAxis: [
        {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: '#8791af'
                },
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Water volume',
            min: 0,
            max: 250,
            interval: 50,
            axisLine: {
                lineStyle: {
                    color: '#8791af'
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(166, 176, 207, 0.1)"
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 25,
            interval: 5,
            axisLine: {
                lineStyle: {
                    color: '#8791af'
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(166, 176, 207, 0.1)"
                }
            },
            axisLabel: {
                formatter: '{value} Ã‚Â°C'
            }
        }
    ],
    series: [
        {
            name: 'Evaporation',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2]
        },
        {
            name: 'Precipitation',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2]
        },
        {
            name: 'Average Temperature',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4]
        }
    ]
};

const guageChart = {
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
            name: 'Business indicator',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#34c38f'], [0.8, '#556ee6'], [1, '#f46a6a']],
                    width: 20
                }
            },
            data: [{ value: 50, name: 'Completion rate' }]
        }
    ]
};


const lineChart = {
    // Setup grid
    grid: {
        zlevel: 0,
        x: 50,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
            }
        }
    },
    legend: {
        data: ['Desktops', 'Laptops', 'Tablets'],
        textStyle: {
            color: '#999'
        }
    },
    series: [{
        name: 'Desktops',
        type: 'line',
        stack: 'yes',
        data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
        name: 'Laptops',
        type: 'line',
        stack: 'yes',
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: 'Tablets',
        type: 'line',
        stack: 'yes',
        data: [150, 232, 201, 154, 190, 330, 410]
    },
    ]
};

const pieChart = {
    visualMap: {
        show: false,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Laptop', 'Tablet', 'Mobile', 'Others', 'Desktop'],
        textStyle: {
            color: '#999'
        }
    },
    color: ['#f46a6a', '#34c38f', '#50a5f1', '#f1b44c', '#556ee6'],
    series: [
        {
            name: 'Total sales',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: 'Laptop' },
                { value: 310, name: 'Tablet' },
                { value: 234, name: 'Mobile' },
                { value: 135, name: 'Others' },
                { value: 1548, name: 'Desktop' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

var data = [
    [[28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [28666, 78.1, 254830, 'Iceland', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [10670, 67.3, 53994605, 'Turkey', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990], [37062, 75.4, 252847810, 'United States', 1990]],
    [[44056, 81.8, 23968973, 'Australia', 2015], [43294, 81.7, 35939927, 'Canada', 2015], [13334, 76.9, 1376048943, 'China', 2015], [21291, 78.5, 11389562, 'Cuba', 2015], [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015], [44053, 81.1, 80688545, 'Germany', 2015], [42182, 82.8, 329425, 'Iceland', 2015], [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015], [1390, 71.4, 25155317, 'North Korea', 2015], [34644, 80.7, 50293439, 'South Korea', 2015], [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015], [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015], [19360, 76.5, 78665830, 'Turkey', 2015], [38225, 81.4, 64715810, 'United Kingdom', 2015], [53354, 79.1, 321773631, 'United States', 2015]]
];
const bubbleChart = {
    grid: {
        zlevel: 0,
        x: 50,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    legend: {
        right: 10,
        data: ['2018', '2019'],
        textStyle: {
            color: '#999'
        }
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
        scale: true
    },
    series: [
        {
            name: '2018',
            data: data[0],
            type: 'scatter',
            symbolSize(data) {
                return Math.sqrt(data[2]) / 5e2
            },
            label: {
                emphasis: {
                    show: true,
                    formatter({ data }) {
                        return data[3]
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: 'rgb(134, 204, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(85, 110, 230)'
                        }
                    ])
                }
            }
        },
        {
            name: '2019',
            data: data[1],
            type: 'scatter',
            symbolSize(data) {
                return Math.sqrt(data[2]) / 5e2
            },
            label: {
                emphasis: {
                    show: true,
                    formatter({ data }) {
                        return data[3]
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(52, 195, 143, 0.5)',
                    shadowOffsetY: 5,
                    color: new graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: 'rgb(111, 255, 203)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(52, 195, 143)'
                        }
                    ])
                }
            }
        }
    ]
};

const doughnutChart = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Laptop', 'Tablet', 'Mobile', 'Others', 'Desktop'],
        textStyle: {
            color: '#999'
        }
    },
    color: ['#556ee6', '#f1b44c', '#f46a6a', '#50a5f1', '#34c38f'],
    series: [
        {
            name: 'Total sales',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: 'Laptop' },
                { value: 310, name: 'Tablet' },
                { value: 234, name: 'Mobile' },
                { value: 135, name: 'Others' },
                { value: 1548, name: 'Desktop' }
            ]
        }
    ]
};

const candleStickChart = {
    // Setup grid
    grid: {
        zlevel: 0,
        x: 50,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
    },
    series: [{
        type: 'k',
        data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42]
        ],
        itemStyle: {
            normal: {
                color: '#556ee6',
                color0: '#34c38f',
                borderColor: '#556ee6',
                borderColor0: '#34c38f'
            }
        }
    }]
};

export { polarChart, mixedBarChart, guageChart, lineChart, pieChart, bubbleChart, doughnutChart, candleStickChart };
