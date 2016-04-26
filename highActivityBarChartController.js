// app.factory("barHighchartOptions", function (globalHighchartOptions, barChartDataService) {
//     return {
//         highActivity: 

//         ,
//         lowActivity:

//     }
// }); 

app.controller("barChartsController", function ($scope, barChartDataService) {

    $scope.barChartData = barChartDataService;

    $scope.highActivityBarChartOptions = {
        chart: {
            type: 'bar',
        },
        colors: $scope.barChartData.highActivityColors,
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
            max: $scope.barChartData.yAxisMaxHighActivity
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: "{series.standardName}{point.standardName}<br>{y} Activities",
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
        series: $scope.barChartData.highActivityDataset,
        exporting: {
            enabled: false
        }
    };

    $scope.updateChartOptions = function () {
        $scope.highActivityBarChartOptions.series = $scope.barChartData.highActivityDataset;
        $scope.highActivityBarChartOptions.yAxis.max = $scope.barChartData.yAxisMaxHighActivity;
    }

    $scope.changeBuildingData = function (selectedBuilding) {
        // barChartDataService.activeIndex = barChartDataService.activeIndex === 0 ? 1 : 0;
        debugger
        barChartDataService.getDataForBuilding(selectedBuilding.index);
        $scope.updateChartOptions();
        $scope.$broadcast("duncan", $scope.highActivityBarChartOptions);
    };
});

// app.controller("barChartSelectController", function ($scope, barChartDataService) {
//     $scope.dataset = barChartDataService.rawData;

//     $scope.changeBuildingData = function (selectedBuilding) {
//         // barChartDataService.activeIndex = barChartDataService.activeIndex === 0 ? 1 : 0;
//         barChartDataService.getDataForBuilding(selectedBuilding.index);
//     };
// });

app.controller("highActivityBarChartController", function($scope, globalHighchartOptions) {

    // $scope.barChartData = barChartDataService;

    $scope.barChartOptions = {
        chart: {
            type: 'bar',
        },
        colors: $scope.barChartData.highActivityColors,
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
            max: $scope.barChartData.yAxisMaxHighActivity
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: "{series.standardName}{point.standardName}<br>{y} Activities",
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
        series: $scope.barChartData.highActivityDataset,
        exporting: {
            enabled: false
        }
    };

    $scope.chartOptions = angular.extend($scope.barChartOptions, globalHighchartOptions);

    $scope.updateChartOptions = function () {
        $scope.chartOptions.series = $scope.barChartData.highActivityDataset;
        $scope.chartOptions.yAxis.max = $scope.barChartData.yAxisMaxHighActivity;
    }

    // console.log($scope.chartOptions.series[0]);

    // $scope.$watch(function () { return barChartDataService.activeIndex }, function (newVal, oldVal) {
    //     // if (typeof newVal !== 'undefined') {
    //     //     // $scope.taskList = uaProgressService.taskList;
    //     //     console.log("new active Index: " + newVal);
    //     //     $scope.barChartData = barChartDataService;
    //     //     // console.log($scope.barChartData);
    //     //     $scope.updateChartOptions();
    //     //     debugger
    //     // }
    //     $scope.updateChartOptions();
    //     $scope.$broadcast("duncan", $scope.chartOptions);
    // });
});