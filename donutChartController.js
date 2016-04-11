app.controller("donutChartController", function($scope) {
    var dataset = [
        ["Registration Fee", 341],
        ["Meals", 204],
        ["Lodging", 171],
        ["Tolls", 123],
        ["Transportation", 109],
        ["Other", 78]
    ];

    // if we use ES2015, these should really be declared as constants
    var chartColors = ["#E9C238", "#5C90CD", "#23D3D3", "#ED8F35", "#DC7247", "#A5E069"];
    var chartTitle = "COST TYPE BREAKDOWN";
    var chartSubtitle = "Total Spent and Budget Breakdown";
    var diameter = 300;
    var innerDiameter = "45%";
    var containerWidth = diameter * 2;
    var pieCenterX = (diameter / 2) + 20;
    var titleFontSize = 20;
    var titleFontSizeString = titleFontSize.toString() + "px";
    var subtitleFontSize = 14;
    var subtitleFontSizeString = subtitleFontSize.toString() + "px";

    // vertically center legend based on title/subtitle text size
    // approximate - works reasonably well for medium font sizes
    var legendTranslateY = (titleFontSize + subtitleFontSize + 12) / 2;


    $scope.chartOptions =  {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
            width: containerWidth
        },
        colors: chartColors,
        title: {
            text: chartTitle,
            align: "left",
            style: {
                "fontSize": titleFontSizeString
            }
        },
        subtitle: {
            text: chartSubtitle,
            align: "left",
            style: {
                "fontSize": subtitleFontSizeString
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
                center: [pieCenterX, null],
                size: diameter,
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
            x: pieCenterX,
            useHTML: true,
            y: legendTranslateY
        },
        series: [{
            colorByPoint: true,
            data: dataset,
            innerSize: innerDiameter,
        }],
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    };
});