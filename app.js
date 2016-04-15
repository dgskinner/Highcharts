var app = angular.module("highchartsApp", []);

app.directive("highchart", function() {
    return {
        scope: {
            config: '='
        },
        restrict: 'E',
        link: function(scope, el, attrs) {
            var options = scope.config;
            options.chart.renderTo = el[0];
            new Highcharts.Chart(options);
        }
    };
});

app.factory("globalHighchartOptions", function () {
    return {
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    }
});