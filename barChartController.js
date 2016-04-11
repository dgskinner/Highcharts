app.controller("barChartController", function($scope) {
    var dataset = [
        {
            name: "Standard 1",
            value: 31
        },
    ];
    
    var highActivityColors = ["#5C90CD", "#DC7247"];
    var lowActivityColors = ["#E9C238", "#23D3D3"];

    $scope.chartOptions = {
        chart: {
            type: 'bar',
        },
        colors: highActivityColors,
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            // can either put "HIGH ACTIVITY" as category or title text
            categories: [""],
            title: {
                text: "HIGH ACTIVITY",
                style: {
                    "fontSize": "18px"
                }
            },
            lineColor: 'transparent',
            tickColor: 'transparent',
            labels: {
                rotation: 270,
                useHTML: true,
                style: {
                    // increase space between label and axis
                    // 1px here does gives much more padding than 1px
                    "paddingBottom": "1px"
                }
            }
        },
        yAxis: {
            gridLineColor: 'transparent',
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            // twice the max data point?
            max: 104
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: "{series.name}<br>{y} Activities",
                    padding: 18,
                    style: {
                        "fontSize": "18px",
                        "color": "#555555"
                    }
                },
                pointWidth: 60,
                groupPadding: 0.05
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Standard 6',
            data: [52]
        }, {
            name: 'Standard 2',
            data: [46]
        }],
        exporting: {
            enabled: false
        }
    };
});