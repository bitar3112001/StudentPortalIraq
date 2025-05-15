const earningChart = {
    series: [{
        name: 'Earnings',
        data: [80, 100, 70, 110, 80, 90, 85, 85, 110, 30, 100, 90]
    }],
    earnings: {
        chart: {
            height: 290,
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: false,
                endingShape: 'rounded'
            },
        },
        series: [{
            name: 'Earnings',
            data: [80, 100, 70, 110, 80, 90, 85, 85, 110, 30, 100, 90]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    colors: '#4D4D4D',
                    fontSize: '13px',
                }
            }
        },
        yaxis: {
            labels: {
                offsetX: -15,
                style: {
                    colors: '#4D4D4D',
                    fontSize: '13px',
                }
            }
        },
        grid: {
            borderColor: '#4D4D4D',
            strokeDashArray: 5
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false // Disable data labels
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'linear',
                shadeIntensity: 0.35,
                gradientToColors: ['#392C7D'], // Second gradient color
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
                angle: 90 // This sets the gradient direction from top to bottom
            }
        },
    }
}

const earningOneChart = {
    series: [{
        name: "Earnings",
        data: [25, 40, 30, 55, 25, 35, 25, 50, 20, 40, 20, 50]
    }],
    earningOne: {
        chart: {
            height: 273,
            type: 'area',
            zoom: {
                enabled: false
            }
        },
        colors: ['#FF4667'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: '',
            align: 'left'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            min: 10,
            max: 60,
            tickAmount: 5,
            labels: {
                formatter: (val) => {
                    return val / 1 + 'K'
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        }
    }
};
export { earningChart,earningOneChart }