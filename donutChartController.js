app.controller("donutChartController", function($scope, donutChartDataService, globalHighchartOptions) {

    var donutChartOptions =  {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
            width: donutChartDataService.containerWidth
        },
        colors: donutChartDataService.chartColors,
        title: {
            text: donutChartDataService.chartTitle,
            align: "left",
            style: {
                "fontSize": donutChartDataService.titleFontSizeString
            }
        },
        subtitle: {
            text: donutChartDataService.chartSubtitle,
            align: "left",
            style: {
                "fontSize": donutChartDataService.subtitleFontSizeString
            }
        },
        tooltip: {
            pointFormat: "<b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                center: [donutChartDataService.pieCenterX, null],
                size: donutChartDataService.diameter,
                borderWidth: 0
            }
        },
        legend: {
            layout: "vertical",
            itemStyle: {
                "lineHeight": "0px",
                "fontSize": "14px",
                "color": "#555555"
            },
            itemMarginTop: 15,
            itemMarginBottom: 15,
            symbolHeight: 20,
            symbolWidth: 20,
            symbolRadius: 10,
            verticalAlign: "middle",
            x: donutChartDataService.pieCenterX,
            useHTML: true,
            y: donutChartDataService.legendTranslateY
        },
        series: [{
            colorByPoint: true,
            data: donutChartDataService.dataset,
            innerSize: donutChartDataService.innerDiameter,
        }]
    };

    $scope.chartOptions = angular.extend(donutChartOptions, globalHighchartOptions);
});