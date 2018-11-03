// Function to determine marker size based on population
function markerSize(beerRating) {
  return beerRating *8;
}

function beerMarkerSize(numberOfBeers) {
  return numberOfBeers/4;
}

// An array containing all of the information needed to create city and state markers

var locations = [
{
 Beer_Rating: 4.29,
 Ranking: 1,
 Brewery_Name: 'Pariah Brewing Company',
 Coordinates: [32.75572, -117.12873],
 Number_of_beers: 25
},
{
 Beer_Rating: 4.18,
 Ranking: 2,
 Brewery_Name: 'Reckless Brewing Company',
 Coordinates: [32.88865, -117.15937],
 Number_of_beers: 26
},
{
 Beer_Rating: 4.17,
 Ranking: 3,
 Brewery_Name: 'Longship Brewery',
 Coordinates: [32.90427, -117.1719],
 Number_of_beers: 19,
},
{
 Beer_Rating: 4.16,
 Ranking: 4,
 Brewery_Name: 'California Wild Ales',          
 Coordinates: [32.905209, -117.214844],
 Number_of_beers: 2,
},
{
 Beer_Rating: 4.15,
 Ranking: 5,
 Brewery_Name: 'Modern Times Beer',
 Coordinates: [32.75423, -117.20615],
 Number_of_beers: 265,
},
{
 Beer_Rating: 4.11,
 Ranking: 6,
 Brewery_Name: 'AleSmith Brewing Company',
 Coordinates: [32.88817, -117.14964],
 Number_of_beers: 122,
},
{
 Beer_Rating: 4.11,
 Ranking: 7,
 Brewery_Name: 'Thunderhawk Alements',
 Coordinates: [32.89503, -117.13664],
 Number_of_beers: 11,
},
{
 Beer_Rating: 4.09,
 Ranking: 8,
 Brewery_Name: 'The Homebrewer / Home Brewing Co',
 Coordinates: [32.75503, -117.13111],
 Number_of_beers: 13,
},
{
 Beer_Rating: 4.09,
 Ranking: 9,
 Brewery_Name: 'Abnormal Beer Company',
 Coordinates: [33.02391, -117.08575],
 Number_of_beers: 56,
},
{
 Beer_Rating: 4.09,
 Ranking: 10,
 Brewery_Name: 'Pure Project',
 Coordinates: [32.88677, -117.15653],
 Number_of_beers: 104,
},
{
 Beer_Rating: 4.07,
 Ranking: 11,
 Brewery_Name: 'Mikkeller Brewing San Diego',
 Coordinates: [32.89213, -117.14483],
 Number_of_beers: 172,
},
{
 Beer_Rating: 4.03,
 Ranking: 12,
 Brewery_Name: 'Societe Brewing Co.',
 Coordinates: [32.83497, -117.14625],
 Number_of_beers: 31,
},
{
  Beer_Rating: 3.97,
  Ranking: 13,
 Brewery_Name: 'North Park Beer Company',
 Coordinates: [32.74872, -117.12914],
 Number_of_beers: 34,
}, 
{
 Beer_Rating: 3.96,
 Ranking: 14,
 Brewery_Name: 'Half Door Brewing Co.',
 Coordinates: [32.71024, -117.15626],
 Number_of_beers: 32,
},
{
 Beer_Rating: 3.95,
 Ranking: 15,
 Brewery_Name: 'Resident Brewing Co.',
 Coordinates: [32.71652, -117.160782],
 Number_of_beers: 31,
},        
{
 Beer_Rating: 3.95,
 Ranking: 16,
 Brewery_Name: 'Knotty Brewing Co.',
 Coordinates: [32.71112, -117.0927],
 Number_of_beers: 10,
},
{
 Beer_Rating: 3.94,
 Ranking: 17,
 Brewery_Name: 'San Diego Brewing Co. - North Park',
 Coordinates: [32.75572, -117.12873],
 Number_of_beers: 5,
},
{
 Beer_Rating: 3.93,
 Ranking: 18,
 Brewery_Name: 'Mike Hess Brewing - North Park',
 Coordinates: [32.74771, -117.12854],
 Number_of_beers: 2,
},     
{
 Beer_Rating: 3.92,
 Ranking: 19,
 Brewery_Name: 'Ballast Point Brewing Company',
 Coordinates: [32.89851, -117.11079],
 Number_of_beers: 168,
},
{
 Beer_Rating: 3.92,
 Ranking: 20,
 Brewery_Name: 'Prodigy Brewing Company',
 Coordinates: [32.7867, -117.10052],
 Number_of_beers: 3,
 }
];

// Define arrays to hold created city and state markers
var beerRatingMarkers = [];
var beerNumMarkers = [];
var topRank= [];

var beerIcon = L.icon({
  iconUrl: '/static/beer.png',
  iconSize:     [80, 80], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var hopsIcon = L.icon({
  iconUrl: '/static/hopster_muriel.png',
  iconSize:     [45, 50], // size of the icon
  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

for (var i = 0; i < locations.length; i++) {
  beerRatingMarkers.push(
    // L.marker(locations[i].Coordinates, {
    //   icon: beerIcon,
    //   stroke: false,
    //   fillOpacity: 0.75,
    //   color: "white",
    //   fillColor: "white",
    //   radius: markerSize(locations[i].Beer_Rating)
    // }).bindPopup(locations[i].Brewery_Name,locations[i].Beer_Rating));

    L.circleMarker(locations[i].Coordinates, {
      fillOpacity: 0.65,
      color: "white",
      fillColor: "yellow",
      radius: markerSize(locations[i].Beer_Rating)
    }).bindPopup("<h2>" + locations[i].Brewery_Name + "</h2> <hr> <h3>Beer Rating: " + locations[i].Beer_Rating+ "</h3> <hr> <h3>Beer Rating Ranking: " + locations[i].Ranking + "</h3>"));
  

  // Setting the marker radius for the city by passing population into the markerSize function
  beerNumMarkers.push(
    L.circleMarker(locations[i].Coordinates, {
      // stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "#33FF9C",
      radius: beerMarkerSize(locations[i].Number_of_beers)
    }).bindPopup("<h2>" + locations[i].Brewery_Name + "</h2> <hr> <h3>Number of Beers Produced: " + locations[i].Number_of_beers+ "</h3>"));
    
  topRank.push(
    L.marker(locations[0].Coordinates, {
    icon: hopsIcon
  }).bindPopup("<h2>" + locations[0].Brewery_Name + "</h2> <hr> <h3>Beer Rating: " + locations[0].Beer_Rating+ "</h3> <hr> <h3>Beer Rating Ranking: " + locations[0].Ranking + "</h3>"));
}

// Define variables for our base layers
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Create two separate layer groups: one for cities and one for states
var beer_rating = L.layerGroup(beerRatingMarkers);
var beer_numbers = L.layerGroup(beerNumMarkers);
var topRankBeer= L.layerGroup(topRank);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "Beer Rating": beer_rating,
  "Number of Beers": beer_numbers,
  "Top Ranked Brewery ": topRankBeer
};

// Define a map object
var myMap = L.map("map", {
  center: [32.8701, -117.1441],
  zoom: 11,
  layers: [streetmap, beer_rating]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
