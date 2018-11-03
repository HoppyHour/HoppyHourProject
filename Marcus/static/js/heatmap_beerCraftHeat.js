var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


d3.json("/static/beer_data_ca.json", function(response) {

  var heatArray = [];

  // for (var i = 0; i < response.length; i++) {
  //   var location = response[i].location;

  //   if (location) {
  //     heatArray.push([location.coordinates[1], location.coordinates[0]]);
  //   }
  // }

  for (var i = 0; i < response.length; i++) {
    if(!Number.isNaN(Number.parseFloat(response[i].latitude)) && !Number.isNaN(Number.parseFloat(response[i].longitude))) {
      heatArray.push([response[i].latitude, response[i].longitude]);
    }
   }

  var heat = L.heatLayer(heatArray, {
    radius: 55, //50
    blur: 9 //20
  }).addTo(myMap);

});
