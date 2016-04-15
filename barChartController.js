app.controller("barChartController", function($scope) {
    var rawData = [
        {
            name: "Standard 1",
            value: 31
        },
        {
            name: "Standard 2",
            value: 46
        },
        {
            name: "Standard 3",
            value: 30
        },
        {
            name: "Standard 4",
            value: 22
        },

        {
            name: "Standard 5",
            value: 15
        },
        {
            name: "Standard 6",
            value: 52
        },
        {
            name: "Standard 7",
            value: 42
        },
        {
            name: "Standard 8",
            value: 39
        },
        {
            name: "Standard 9",
            value: 12
        },
        {
            name: "Standard 10",
            value: 14
        },
        {
            name: "Standard 11",
            value: 3
        },
        {
            name: "Standard 12",
            value: 25
        }
    ];

    var highest = rawData[0],
        secondHighest = rawData[0],
        lowest = rawData[0],
        secondLowest = rawData[0];

    for (var i = 1; i < rawData.length; i++) {
        if (rawData[i].value > highest.value) {
            secondHighest = highest;
            highest = rawData[i];
        } else if (rawData[i].value > secondHighest.value) {
            secondHighest = rawData[i];
        } else if (rawData[i].value < lowest.value) {
            secondLowest = lowest;
            lowest = rawData[i];
        } else if (rawData[i].value < secondLowest.value) {
            secondLowest = rawData[i];
        }
    }

    var dataset1 = [highest, secondHighest];
    var dataset2 = [lowest, secondLowest];

    function groomDataForHighcharts (dataset) {
        dataset.forEach(function (item) {
            item.data = [item.value];
        });
    }
    groomDataForHighcharts(dataset1);
    groomDataForHighcharts(dataset2);

    var highActivityColors = ["#5C90CD", "#DC7247"];
    var lowActivityColors = ["#E9C238", "#23D3D3"];
    var yAxisMax1 = 1.5 * Math.max(dataset1[0].data, dataset1[1].data);
    var yAxisMax2 = 4 * Math.max(dataset2[0].data, dataset2[1].data);

    $scope.chartOptions1 = {
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
                    // 1px here does gives much more padding than 1px (weird)
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
            // 3/2 times the max data point
            max: yAxisMax1
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
        series: dataset1,
        exporting: {
            enabled: false
        }
    };

    $scope.chartOptions2 = {
        chart: {
            type: 'bar',
        },
        colors: lowActivityColors,
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
                text: "LOW ACTIVITY",
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
            // 4 times the max data point?
            max: yAxisMax2
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
        series: dataset2,
        exporting: {
            enabled: false
        }
    };
});