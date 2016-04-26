app.service("barChartDataService", function () {

    var _barChartData = {};

    _barChartData.rawData = [
        {
            buildingName: "Victoria County High School",
            standards: [
                {
                    standardTitle: "Standard 1",
                    value: 31
                },
                {
                    standardTitle: "Standard 2",
                    value: 46
                },
                {
                    standardTitle: "Standard 3",
                    value: 30
                },
                {
                    standardTitle: "Standard 4",
                    value: 22
                },

                {
                    standardTitle: "Standard 5",
                    value: 15
                },
                {
                    standardTitle: "Standard 6",
                    value: 52
                },
                {
                    standardTitle: "Standard 7",
                    value: 42
                },
                {
                    standardTitle: "Standard 8",
                    value: 39
                },
                {
                    standardTitle: "Standard 9",
                    value: 12
                },
                {
                    standardTitle: "Standard 10",
                    value: 14
                },
                {
                    standardTitle: "Standard 11",
                    value: 3
                },
                {
                    standardTitle: "Standard 12",
                    value: 25
                }
            ]
        },
        {  
            buildingName: "Madison East High School",
            standards: [
                {
                    standardTitle: "Standard 1",
                    value: 31
                },
                {
                    standardTitle: "Standard 2",
                    value: 42
                },
                {
                    standardTitle: "Standard 3",
                    value: 57
                },
                {
                    standardTitle: "Standard 4",
                    value: 22
                },

                {
                    standardTitle: "Standard 5",
                    value: 15
                },
                {
                    standardTitle: "Standard 6",
                    value: 48
                },
                {
                    standardTitle: "Standard 7",
                    value: 42
                },
                {
                    standardTitle: "Standard 8",
                    value: 39
                },
                {
                    standardTitle: "Standard 9",
                    value: 12
                },
                {
                    standardTitle: "Standard 10",
                    value: 4
                },
                {
                    standardTitle: "Standard 11",
                    value: 13
                },
                {
                    standardTitle: "Standard 12",
                    value: 7
                }
            ]
        }
    ];

    function addIndexesToRawData () {
        _barChartData.rawData.forEach(function (item, index) {
            item.index = index;
        });
    }
    addIndexesToRawData();

    // add 'data' property to format datasets for highcharts
    // and 'name' property for data labels to work properly
    function groomDataForHighcharts (dataset) {
        dataset.forEach(function (item) {
            item.data = [item.value];
            item.name = item.standardTitle;
        });
        return dataset;
    }

    // var highActivityDataset, lowActivityDataset;
    var highest, secondHighest, lowest, secondLowest;

    _barChartData.getDataForBuilding = function (activeIndex) {
        var schoolStandards = _barChartData.rawData[activeIndex].standards;
        highest = schoolStandards[0];
        secondHighest = schoolStandards[0];
        lowest = schoolStandards[0];
        secondLowest = schoolStandards[0];

        for (var i = 1; i < schoolStandards.length; i++) {
            if (schoolStandards[i].value > highest.value) {
                secondHighest = highest;
                highest = schoolStandards[i];
            } else if (schoolStandards[i].value > secondHighest.value) {
                secondHighest = schoolStandards[i];
            } else if (schoolStandards[i].value < lowest.value) {
                secondLowest = lowest;
                lowest = schoolStandards[i];
            } else if (schoolStandards[i].value < secondLowest.value) {
                secondLowest = schoolStandards[i];
            }
        }

        _barChartData.highActivityDataset = groomDataForHighcharts([highest, secondHighest]);
        _barChartData.lowActivityDataset = groomDataForHighcharts([lowest, secondLowest]);
        _barChartData.yAxisMaxHighActivity = 1.5 * highest.value;
        _barChartData.yAxisMaxLowActivity = 4 * secondLowest.value;
    }
    // show data for the first building in the list by default
    _barChartData.getDataForBuilding(0);

    // _barChartData.highActivityColors = ["#5C90CD", "#DC7247"];
    // _barChartData.lowActivityColors = ["#E9C238", "#23D3D3"];

    return _barChartData;
});