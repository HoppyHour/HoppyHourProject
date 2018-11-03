// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
 // .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from Amount-of-tv-watched.csv
d3.csv("beer_data.csv", function(error, beerData) {

  // Log an error if one exists
  if (error) return console.warn(error);

  // Print the beerData
  console.log(beerData);

  beerData.forEach(function(data) {
    data.Amount = +data.Amount;
  });

  var barSpacing = 10; // desired space between each bar
  var scaleY = 1000000; // 10x scale on rect height

  // @TODO
  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  var barWidth = (chartWidth - (barSpacing * (beerData.length - 1))) / beerData.length;

  // Create code to build the bar chart using the beerData.
  chartGroup.selectAll(".bar")
    .data(beerData)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", d => barWidth)
    .attr("height", d => d.Amount/scaleY)
    .attr("x", (d, i) => i * (barWidth + barSpacing))
    .attr("y", d => chartHeight - d.Amount/scaleY);
});
