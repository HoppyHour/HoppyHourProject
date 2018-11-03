window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	title: {
		text: "House Median Price"
	},
	axisX: {
		valueFormatString: "MMM YYYY"
	},
	axisY2: {
		title: "Beer Production",
		suffix: "barrels"
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		horizontalAlign: "center",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type:"line",
		axisYType: "secondary",
		name: "6 million barrels and over",
		showInLegend: true,
		markerSize: 0,
        yValueFormatString: "#,### barrels",
        dataPoints: [
            { x:new Date(date1[9], 00, 01), y: total_barrels1[9]},
            { x:new Date(date1[8], 00, 01), y: total_barrels1[8]},
            { x:new Date(date1[7], 00, 01), y: total_barrels1[7]},
            { x:new Date(date1[6], 00, 01), y: total_barrels1[6]},
            { x:new Date(date1[5], 00, 01), y: total_barrels1[5]},
            { x:new Date(date1[4], 00, 01), y: total_barrels1[4]},
            { x:new Date(date1[3], 00, 01), y: total_barrels1[3]},
            { x:new Date(date1[2], 00, 01), y: total_barrels1[2]},
            { x:new Date(date1[1], 00, 01), y: total_barrels1[1]},
            { x:new Date(date1[0], 00, 01), y:total_barrels1[0]}
          
            ]
		
	},
	{
		type: "line",
		axisYType: "secondary",
		name: "Manhattan",
		showInLegend: true,
		markerSize: 0,
		yValueFormatString: "$#,###k",
		dataPoints: [
			{ x: new Date(2014, 00, 01), y: 1200 },
			{ x: new Date(2014, 01, 01), y: 1200 },
			{ x: new Date(2014, 02, 01), y: 1190 },
			{ x: new Date(2014, 03, 01), y: 1180 },
			{ x: new Date(2014, 04, 01), y: 1250 },
			{ x: new Date(2014, 05, 01), y: 1270 },
			{ x: new Date(2014, 06, 01), y: 1300 },
			{ x: new Date(2014, 07, 01), y: 1300 },
			{ x: new Date(2014, 08, 01), y: 1358 },
			{ x: new Date(2014, 09, 01), y: 1410 },
			{ x: new Date(2014, 10, 01), y: 1480 },
			{ x: new Date(2014, 11, 01), y: 1500 },
			{ x: new Date(2015, 00, 01), y: 1500 },
			{ x: new Date(2015, 01, 01), y: 1550 },
			{ x: new Date(2015, 02, 01), y: 1550 },
			{ x: new Date(2015, 03, 01), y: 1590 },
			{ x: new Date(2015, 04, 01), y: 1600 },
			{ x: new Date(2015, 05, 01), y: 1590 },
			{ x: new Date(2015, 06, 01), y: 1590 },
			{ x: new Date(2015, 07, 01), y: 1620 },
			{ x: new Date(2015, 08, 01), y: 1670 },
			{ x: new Date(2015, 09, 01), y: 1720 },
			{ x: new Date(2015, 10, 01), y: 1750 },
			{ x: new Date(2015, 11, 01), y: 1820 },
			{ x: new Date(2016, 00, 01), y: 2000 },
			{ x: new Date(2016, 01, 01), y: 1920 },
			{ x: new Date(2016, 02, 01), y: 1750 },
			{ x: new Date(2016, 03, 01), y: 1850 },
			{ x: new Date(2016, 04, 01), y: 1750 },
			{ x: new Date(2016, 05, 01), y: 1730 },
			{ x: new Date(2016, 06, 01), y: 1700 },
			{ x: new Date(2016, 07, 01), y: 1730 },
			{ x: new Date(2016, 08, 01), y: 1720 },
			{ x: new Date(2016, 09, 01), y: 1740 },
			{ x: new Date(2016, 10, 01), y: 1750 },
			{ x: new Date(2016, 11, 01), y: 1750 },
			{ x: new Date(2017, 00, 01), y: 1750 },
			{ x: new Date(2017, 01, 01), y: 1770 },
			{ x: new Date(2017, 02, 01), y: 1750 },
			{ x: new Date(2017, 03, 01), y: 1750 },
			{ x: new Date(2017, 04, 01), y: 1730 },
			{ x: new Date(2017, 05, 01), y: 1730 }
		]
	},
	{
		type: "line",
		axisYType: "secondary",
		name: "Seatle",
		showInLegend: true,
		markerSize: 0,
		yValueFormatString: "$#,###k",
		dataPoints: [
			{ x: new Date(2014, 00, 01), y: 409 },
			{ x: new Date(2014, 01, 01), y: 415 },
			{ x: new Date(2014, 02, 01), y: 419 },
			{ x: new Date(2014, 03, 01), y: 429 },
			{ x: new Date(2014, 04, 01), y: 429 },
			{ x: new Date(2014, 05, 01), y: 450 },
			{ x: new Date(2014, 06, 01), y: 450 },
			{ x: new Date(2014, 07, 01), y: 445 },
			{ x: new Date(2014, 08, 01), y: 450 },
			{ x: new Date(2014, 09, 01), y: 450 },
			{ x: new Date(2014, 10, 01), y: 440 },
			{ x: new Date(2014, 11, 01), y: 429 },
			{ x: new Date(2015, 00, 01), y: 435 },
			{ x: new Date(2015, 01, 01), y: 450 },
			{ x: new Date(2015, 02, 01), y: 475 },
			{ x: new Date(2015, 03, 01), y: 475 },
			{ x: new Date(2015, 04, 01), y: 475 },
			{ x: new Date(2015, 05, 01), y: 489 },
			{ x: new Date(2015, 06, 01), y: 495 },
			{ x: new Date(2015, 07, 01), y: 495 },
			{ x: new Date(2015, 08, 01), y: 500 },
			{ x: new Date(2015, 09, 01), y: 508 },
			{ x: new Date(2015, 10, 01), y: 520 },
			{ x: new Date(2015, 11, 01), y: 525 },
			{ x: new Date(2016, 00, 01), y: 525 },
			{ x: new Date(2016, 01, 01), y: 529 },
			{ x: new Date(2016, 02, 01), y: 549 },
			{ x: new Date(2016, 03, 01), y: 550 },
			{ x: new Date(2016, 04, 01), y: 568 },
			{ x: new Date(2016, 05, 01), y: 575 },
			{ x: new Date(2016, 06, 01), y: 579 },
			{ x: new Date(2016, 07, 01), y: 575 },
			{ x: new Date(2016, 08, 01), y: 585 },
			{ x: new Date(2016, 09, 01), y: 589 },
			{ x: new Date(2016, 10, 01), y: 595 },
			{ x: new Date(2016, 11, 01), y: 595 },
			{ x: new Date(2017, 00, 01), y: 595 },
			{ x: new Date(2017, 01, 01), y: 600 },
			{ x: new Date(2017, 02, 01), y: 624 },
			{ x: new Date(2017, 03, 01), y: 635 },
			{ x: new Date(2017, 04, 01), y: 650 },
			{ x: new Date(2017, 05, 01), y: 675 }
		]
	},
	{
		type: "line",
		axisYType: "secondary",
		name: "Los Angeles",
		showInLegend: true,
		markerSize: 0,
		yValueFormatString: "$#,###k",
		dataPoints: [
			{ x: new Date(2014, 00, 01), y: 529 },
			{ x: new Date(2014, 01, 01), y: 540 },
			{ x: new Date(2014, 02, 01), y: 539 },
			{ x: new Date(2014, 03, 01), y: 565 },
			{ x: new Date(2014, 04, 01), y: 575 },
			{ x: new Date(2014, 05, 01), y: 579 },
			{ x: new Date(2014, 06, 01), y: 589 },
			{ x: new Date(2014, 07, 01), y: 579 },
			{ x: new Date(2014, 08, 01), y: 579 },
			{ x: new Date(2014, 09, 01), y: 579 },
			{ x: new Date(2014, 10, 01), y: 569 },
			{ x: new Date(2014, 11, 01), y: 525 },
			{ x: new Date(2015, 00, 01), y: 535 },
			{ x: new Date(2015, 01, 01), y: 575 },
			{ x: new Date(2015, 02, 01), y: 599 },
			{ x: new Date(2015, 03, 01), y: 619 },
			{ x: new Date(2015, 04, 01), y: 639 },
			{ x: new Date(2015, 05, 01), y: 648 },
			{ x: new Date(2015, 06, 01), y: 640 },
			{ x: new Date(2015, 07, 01), y: 645 },
			{ x: new Date(2015, 08, 01), y: 648 },
			{ x: new Date(2015, 09, 01), y: 649 },
			{ x: new Date(2015, 10, 01), y: 649 },
			{ x: new Date(2015, 11, 01), y: 649 },
			{ x: new Date(2016, 00, 01), y: 650 },
			{ x: new Date(2016, 01, 01), y: 665 },
			{ x: new Date(2016, 02, 01), y: 675 },
			{ x: new Date(2016, 03, 01), y: 695 },
			{ x: new Date(2016, 04, 01), y: 690 },
			{ x: new Date(2016, 05, 01), y: 699 },
			{ x: new Date(2016, 06, 01), y: 699 },
			{ x: new Date(2016, 07, 01), y: 699 },
			{ x: new Date(2016, 08, 01), y: 699 },
			{ x: new Date(2016, 09, 01), y: 699 },
			{ x: new Date(2016, 10, 01), y: 709 },
			{ x: new Date(2016, 11, 01), y: 699 },
			{ x: new Date(2017, 00, 01), y: 700 },
			{ x: new Date(2017, 01, 01), y: 700 },
			{ x: new Date(2017, 02, 01), y: 724 },
			{ x: new Date(2017, 03, 01), y: 739 },
			{ x: new Date(2017, 04, 01), y: 749 },
			{ x: new Date(2017, 05, 01), y: 740 }
		]
	}]
});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

}

