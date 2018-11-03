
// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
// var chartMargin = {
//   top: 30,
//   right: 30,
//   bottom: 30,
//   left: 30
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

  var svg = d3.select("svg"),
  margin = 200,
  width = svg.attr("width") - margin,
  height = svg.attr("height") - margin

svg.append("text")
 .attr("transform", "translate(100,0)")
 .attr("x", 50)
 .attr("y", 50)
 .attr("font-size", "24px")
 .text("beer economic impact")

var xScale = d3.scaleBand().range([0, width]).padding(0.2),
  yScale = d3.scaleLinear().range([height, 0]);

var g = svg.append("g")
         .attr("transform", "translate(" + 100 + "," + 100 + ")");


d3.csv("./static/beer_data.csv", function(error, data) {
  if (error) {
      throw error;
  }
data.sort((a, b) => d3.descending(Number(a.Amount), Number(b.Amount)))

  xScale.domain(data.map(function(d) { return d.State; }));
  yScale.domain([0, d3.max(data, function(d) { return Number(d.Amount); })]);

  g.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(xScale))
   .selectAll("text")	
   .style("text-anchor", "end")
   .attr("dx", "-.8em")
   .attr("dy", ".15em")
   .attr("transform", "rotate(-65)");


  g.append("g")
   .call(d3.axisLeft(yScale).tickFormat(function(d){
       return "$" + d;
   })
   .ticks(10))
   .append("text")
   .attr("y", 6)
   .attr("dy", "-5.1em")
   .attr("text-anchor", "end")
   .attr("stroke", "black")
   .text("Amount");

  g.selectAll(".bar")
   .data(data)
   .enter().append("rect")
   .attr("class", "bar")
   .attr("x", function(d) { return xScale(d.State); })
   .attr("y", function(d) { return yScale(d.Amount); })
   .attr("width", xScale.bandwidth())
   .attr("height", function(d) { return height - yScale(d.Amount); });
});
