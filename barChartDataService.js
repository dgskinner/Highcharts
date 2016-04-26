app.service("barChartDataService", function () {

    var _barChartData = {};

    _barChartData.rawData = [
        {
            buildingName: "Victoria County High School",
            standards: [
                {
                    standardName: "Standard 1",
                    value: 31
                },
                {
                    standardName: "Standard 2",
                    value: 46
                },
                {
                    standardName: "Standard 3",
                    value: 30
                },
                {
                    standardName: "Standard 4",
                    value: 22
                },

                {
                    standardName: "Standard 5",
                    value: 15
                },
                {
                    standardName: "Standard 6",
                    value: 52
                },
                {
                    standardName: "Standard 7",
                    value: 42
                },
                {
                    standardName: "Standard 8",
                    value: 39
                },
                {
                    standardName: "Standard 9",
                    value: 12
                },
                {
                    standardName: "Standard 10",
                    value: 14
                },
                {
                    standardName: "Standard 11",
                    value: 3
                },
                {
                    standardName: "Standard 12",
                    value: 25
                }
            ]
        },
        {  
            buildingName: "Madison East High School",
            standards: [
                {
                    standardName: "Standard 1",
                    value: 31
                },
                {
                    standardName: "Standard 2",
                    value: 42
                },
                {
                    standardName: "Standard 3",
                    value: 57
                },
                {
                    standardName: "Standard 4",
                    value: 22
                },

                {
                    standardName: "Standard 5",
                    value: 15
                },
                {
                    standardName: "Standard 6",
                    value: 48
                },
                {
                    standardName: "Standard 7",
                    value: 42
                },
                {
                    standardName: "Standard 8",
                    value: 39
                },
                {
                    standardName: "Standard 9",
                    value: 12
                },
                {
                    standardName: "Standard 10",
                    value: 4
                },
                {
                    standardName: "Standard 11",
                    value: 13
                },
                {
                    standardName: "Standard 12",
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
    console.log(_barChartData.rawData);

    // add 'data' property to format datasets for highcharts
    function groomDataForHighcharts (dataset) {
        dataset.forEach(function (item) {
            item.data = [item.value];
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

        // groomDataForHighcharts(highActivityDataset);
        // groomDataForHighcharts(lowActivityDataset);

        _barChartData.activeIndex = activeIndex;
        _barChartData.highActivityDataset = groomDataForHighcharts([highest, secondHighest]);
        _barChartData.lowActivityDataset = groomDataForHighcharts([lowest, secondLowest]);
        console.log(_barChartData.highActivityDataset, _barChartData.lowActivityDataset);
        _barChartData.yAxisMaxHighActivity = 1.5 * highest.value;
        _barChartData.yAxisMaxLowActivity = 4 * secondLowest.value;
    }

    // show data for the first building in the list by default
    _barChartData.getDataForBuilding(0);

    // _barChartData.activeIndex = activeIndex;
    // _barChartData.highActivityDataset = highActivityDataset;
    // _barChartData.lowActivityDataset = lowActivityDataset;
    _barChartData.highActivityColors = ["#5C90CD", "#DC7247"];
    _barChartData.lowActivityColors = ["#E9C238", "#23D3D3"];

    return _barChartData;
});