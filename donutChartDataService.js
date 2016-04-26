app.service("donutChartDataService", function () {

    var _donutChartData = {};

    _donutChartData.dataset = [
        ["Registration Fee", 341],
        ["Meals", 204],
        ["Lodging", 171],
        ["Tolls", 123],
        ["Transportation", 109],
        ["Other", 78]
    ];

    _donutChartData.chartColors = ["#E9C238", "#5C90CD", "#23D3D3", "#ED8F35", "#DC7247", "#A5E069"];
    _donutChartData.chartTitle = "COST TYPE BREAKDOWN";
    _donutChartData.chartSubtitle = "Total Spent and Budget Breakdown";
    _donutChartData.diameter = 300;
    _donutChartData.innerDiameter = "45%";
    _donutChartData.containerWidth = _donutChartData.diameter * 2;
    _donutChartData.pieCenterX = (_donutChartData.diameter / 2) + 20;
    _donutChartData.titleFontSize = 20;
    _donutChartData.titleFontSizeString = _donutChartData.titleFontSize.toString() + "px";
    _donutChartData.subtitleFontSize = 14;
    _donutChartData.subtitleFontSizeString = _donutChartData.subtitleFontSize.toString() + "px";

    // vertically center legend based on title/subtitle text size
    // approximate - works reasonably well for medium font sizes
    _donutChartData.legendTranslateY = (_donutChartData.titleFontSize + _donutChartData.subtitleFontSize + 12) / 2;

    return _donutChartData;
});