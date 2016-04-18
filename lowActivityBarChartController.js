app.controller("lowActivityBarChartController", function($scope, barChartDataService, globalHighchartOptions) {

    var barChartOptions = {
        chart: {
            type: 'bar',
        },
        colors: barChartDataService.lowActivityColors,
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
            max: barChartDataService.yAxisMaxLowActivity
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
        series: barChartDataService.lowActivityDataset,
        exporting: {
            enabled: false
        }
    };

    $scope.chartOptions = angular.extend(barChartOptions, globalHighchartOptions);
});