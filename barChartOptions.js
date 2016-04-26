app.factory("barChartOptions", function (barChartDataService, globalHighchartOptions) {

    var _barChartOptions = {};

    var barChartOptions = {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            // can either put "HIGH/LOW ACTIVITY" as category or title text
            categories: [""],
            title: {
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
            }
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
        }
    };

    barChartOptions = angular.extend({}, barChartOptions, globalHighchartOptions);

    _barChartOptions.highActivityOptions = angular.merge({}, barChartOptions);
    _barChartOptions.highActivityOptions.colors = ["#5C90CD", "#DC7247"];
    _barChartOptions.highActivityOptions.xAxis.title.text = "HIGH ACTIVITY";
    _barChartOptions.highActivityOptions.yAxis.max = barChartDataService.yAxisMaxHighActivity;
    _barChartOptions.highActivityOptions.series = barChartDataService.highActivityDataset;

    _barChartOptions.lowActivityOptions = angular.merge({}, barChartOptions);
    _barChartOptions.lowActivityOptions.colors = ["#E9C238", "#23D3D3"];
    _barChartOptions.lowActivityOptions.xAxis.title.text = "LOW ACTIVITY";
    _barChartOptions.lowActivityOptions.yAxis.max = barChartDataService.yAxisMaxLowActivity;
    _barChartOptions.lowActivityOptions.series = barChartDataService.lowActivityDataset;

    console.log(_barChartOptions);
    return _barChartOptions;
});