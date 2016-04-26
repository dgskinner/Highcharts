app.controller("barChartsController", function ($scope, barChartDataService, barChartOptions) {

    $scope.barChartData = barChartDataService;
    $scope.highActivityBarChartOptions = barChartOptions.highActivityOptions;
    $scope.lowActivityBarChartOptions = barChartOptions.lowActivityOptions;

    $scope.updateChartOptions = function () {
        $scope.highActivityBarChartOptions.series = $scope.barChartData.highActivityDataset;
        $scope.highActivityBarChartOptions.yAxis.max = $scope.barChartData.yAxisMaxHighActivity;
        $scope.lowActivityBarChartOptions.series = $scope.barChartData.lowActivityDataset;
        $scope.lowActivityBarChartOptions.yAxis.max = $scope.barChartData.yAxisMaxLowActivity;
    }

    $scope.changeBuildingData = function (selectedBuilding) {
        barChartDataService.getDataForBuilding(selectedBuilding.index);
        $scope.updateChartOptions();
        $scope.$broadcast("highActivityBarChartRefresh", $scope.highActivityBarChartOptions);
        $scope.$broadcast("lowActivityBarChartRefresh", $scope.lowActivityBarChartOptions);
    };
});