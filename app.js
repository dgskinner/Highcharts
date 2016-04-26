var app = angular.module("highchartsApp", []);

app.directive("highchart", function () {
    return {
        scope: {
            config: "=",
            refreshEventName: "@"
        },
        restrict: "E",
        link: function(scope, el, attrs) {
            var options = scope.config;
            options.chart.renderTo = el[0];
            var highchart = new Highcharts.Chart(options);

            if (scope.refreshEventName) {
                scope.$on(scope.refreshEventName, function (event, chartOptions) {
                    highchart.destroy();
                    highchart = new Highcharts.Chart(chartOptions);
                });
            }
        }
    };
});