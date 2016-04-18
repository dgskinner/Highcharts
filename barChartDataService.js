app.service("barChartDataService", function () {
    
    var _barChartData = {};

    var rawData = [
        {
            name: "Standard 1",
            value: 31
        },
        {
            name: "Standard 2",
            value: 46
        },
        {
            name: "Standard 3",
            value: 30
        },
        {
            name: "Standard 4",
            value: 22
        },

        {
            name: "Standard 5",
            value: 15
        },
        {
            name: "Standard 6",
            value: 52
        },
        {
            name: "Standard 7",
            value: 42
        },
        {
            name: "Standard 8",
            value: 39
        },
        {
            name: "Standard 9",
            value: 12
        },
        {
            name: "Standard 10",
            value: 14
        },
        {
            name: "Standard 11",
            value: 3
        },
        {
            name: "Standard 12",
            value: 25
        }
    ];

    var highest = rawData[0],
        secondHighest = rawData[0],
        lowest = rawData[0],
        secondLowest = rawData[0];

    for (var i = 1; i < rawData.length; i++) {
        if (rawData[i].value > highest.value) {
            secondHighest = highest;
            highest = rawData[i];
        } else if (rawData[i].value > secondHighest.value) {
            secondHighest = rawData[i];
        } else if (rawData[i].value < lowest.value) {
            secondLowest = lowest;
            lowest = rawData[i];
        } else if (rawData[i].value < secondLowest.value) {
            secondLowest = rawData[i];
        }
    }

    var highActivityDataset = [highest, secondHighest];
    var lowActivityDataset = [lowest, secondLowest];

    function groomDataForHighcharts (dataset) {
        dataset.forEach(function (item) {
            item.data = [item.value];
        });
    }
    groomDataForHighcharts(highActivityDataset);
    groomDataForHighcharts(lowActivityDataset);

    _barChartData.highActivityDataset = highActivityDataset;
    _barChartData.lowActivityDataset = lowActivityDataset;
    _barChartData.yAxisMaxHighActivity = 1.5 * highest.value;
    _barChartData.yAxisMaxLowActivity = 4 * secondLowest.value;
    _barChartData.highActivityColors = ["#5C90CD", "#DC7247"];
    _barChartData.lowActivityColors = ["#E9C238", "#23D3D3"];

    return _barChartData;
});