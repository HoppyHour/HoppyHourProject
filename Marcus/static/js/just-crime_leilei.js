var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1Ijoia3VsaW5pIiwiYSI6ImNpeWN6bjJ0NjAwcGYzMnJzOWdoNXNqbnEifQ.jEzGgLAwQnZCv9rA6UTfxQ"
}).addTo(myMap);


d3.json("/static/beer_data_ca.json",function(data)
{
  for (var i = 0; i < data.length; i++) {
    if(!Number.isNaN(Number.parseFloat(data[i].latitude)) && !Number.isNaN(Number.parseFloat(data[i].longitude))) {
      L.marker([data[i].latitude, data[i].longitude]).addTo(myMap);
    }
  }
});

