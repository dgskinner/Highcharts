var app = angular.module("highchartsApp", []);

app.directive("highcharts", function() {
    return {
        link: function(scope, el, attrs) {
            var options = scope.$eval(attrs.highcharts);
            options.chart.renderTo = el[0];
            new Highcharts.Chart(options);
        }
    };
});