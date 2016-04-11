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
    var highest, secondHighest, lowest, secondLowest;
    rawData.forEach(function (item) {
        // do stuff here
    });
    var dataset1 = [];
    var dataset2 = [];
    dataset1 = [{
        name: 'Standard 6',
        data: [52]
    }, {
        name: 'Standard 2',
        data: [46]
    }];
    dataset2 = [{
        name: 'Standard 11',
        data: [3]
    }, {
        name: 'Standard 9',
        data: [12]
    }];

    var highActivityColors = ["#5C90CD", "#DC7247"];
    var lowActivityColors = ["#E9C238", "#23D3D3"];

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
            max: 52
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
            // twice the max data point?
            max: 24
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