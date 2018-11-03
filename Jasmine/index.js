//render initial table
var table = d3.select('#dataTable');
var dataColumns = ["datetime","city","state","country","shape","durationMinutes","comments"]

function renderTable(dataForTable) {
    firstResult = curPage*50
    if (dataForTable.length - firstResult > 50){
        lastResult = 50;
    }
    else {
        lastResult = (dataForTable.length - firstResult) - 1;
    };
    for(i=0; i<lastResult; i++){
        var newRow = table.append('tr')
        newRow.append('td').attr('style', 'word-wrap: break-word;min-width: 50px;max-width: 400px;').text(firstResult + i + 1);
        for(j=0; j<dataColumns.length; j++){
            var dataPoint = dataForTable[firstResult+i][dataColumns[j]];
            newRow.append('td').attr('style', 'word-wrap: break-word;min-width: 50px;max-width: 400px;').text(dataPoint);
        };
    };
    createDropdown(countrySelector, getCountryList,dataForTable);
    createDropdown(stateSelector, getStateList,dataForTable);
    createDropdown(shapeSelector, getShapeList,dataForTable);
    countrySelector.property('value', selectedCountry);
    stateSelector.property('value', selectedState);
    shapeSelector.property('value', selectedShape);
    lastPage = Math.floor(dataForTable.length/50)
    renderPagination();
};

renderTable(dataSet);