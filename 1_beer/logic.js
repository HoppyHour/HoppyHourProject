// Create a map object
var myMap = L.map("map", {
  center: [32.9595, -117.2653],
  zoom: 10
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Brewery data
var breweries = [
  {
    name: "2Kids Brewing Co.",
    location: [32.8966532, -117.1372753],
    type: "craft brewhouse / nanotype"
  },

{
    name: "3 Punk Ales",
    location: [32.6428434, -117.0801667],
    type: "craft brewhouse"
  },

{
    name: "32 North Brewing",
    location: [32.8806222, -117.1652732],
    type: "taproom"
  },

{
    name: "Abnormal Beer Company",
    location: [33.0236355, -117.0859077],
    type: 4
  },

{
    name: "Acoustic Ales Brewing Experiment",
    location: [32.7422734, -117.1846480],
    type:   1
  },

{
    name: "AleSmith Brewing Company",
    location: [32.8882176, -117.1498210],
    type:   1
  },

{
    name: "Align Brewing Co.",
    location: [32.8966532, -117.1372753],
    type: "taproom"
  },

{
    name: "Alpine Beer Company",
    location: [32.8351688, -116.7626655],
    type: "taproom"
  },

{
    name: "Alta Brewing Company*",
    location: [32.7018919, -117.1412748],
    type: "taproom"
  },

{
    name: "Amplified Ale Works",
    location: [32.7917660, -117.254324],
    type: "taproom"
  },

{
    name: "Amplified Ale Works",
    location: [32.8866311, -117.157127],
    type: "taproom"
  },

{
    name: "Arcana Brewing Co.",
    location: [33.1402460, -117.273870],
    type: "taproom"
  },

{
    name: "Attitude Brewing Company",
    location: [32.7000923, -117.144628],
    type: "taproom"
  },

{
    name: "Automatic Brewing Company",
    location: [32.7634980, -117.120300],
    type: "taproom"
  },

{
    name: "Aztec Brewing Company",
    location: [33.1496470, -117.230040],
    type: "taproom"
  },

{
    name: "Back Street Brewery",
    location: [33.2000080, -117.244742],
    type: "taproom"
  },

{
    name: "Bagby Beer Company",
    location: [33.1893679, -117.374349],
    type: 4
  },

{
    name: "Ballast Point Brewing &amp; Spirits - Scripps Ranch",
    location: [32.8985252, -117.110940],
    type: 4
  },

{
    name: "Ballast Point Brewing &amp; Spirits (Miramar)",
    location: [32.8879565, -117.157908],
    type: 4
  },

{
    name: "Ballast Point Brewing &amp; Spirits - Home Brew Mart",
    location: [32.7667161, -117.195263],
    type: 4
  },

{
    name: "Ballast Point Brewing &amp; Spirits - Little Italy",
    location: [32.7276346, -117.169717],
    type: 4
  },

{
    name: "Barn Brewery *",
    location: [32.7555903, -117.132380],
    type: 4
  },

{
    name: "Barrel Harbor",
    location: [33.1488745, -117.221587],
    type:   1
  },

{
    name: "Barrel Harbor",
    location: [32.8953877, -117.132369],
    type:   1
  },

{
    name: "Barrel Rescue",
    location: [32.8289272, -117.147994],
    type:   1
  },

{
    name: "Battlemage Brewing Company",
    location: [33.1402282, -117.227436],
    type:   1
  },

{
    name: "Bay Bridge Brewing *",
    location: [32.6011946, -117.083223],
    type:   1
  },

{
    name: "Bay City Brewing",
    location: [32.7580336, -117.211802],
    type:   1
  },

{
    name: "Beach Grease Bear Company *",
    location: [33.1419452, -117.219428],
    type:   1
  },

{
    name: "Bear Roots Brewing Co.",
    location: [33.1882451, -117.226342],
    type:   1
  },

{
    name: "Belching Beaver Brewery",
    location: [33.1450194, -117.229672],
    type:   1
  },

{
    name: "Belching Beaver Brewery",
    location: [33.2125240, -117.291587],
    type:   1
  },

{
    name: "Belching Beaver Brewery Tavern &amp; Grill",
    location: [33.2021206, -117.241023],
    type:   4
  },

{
    name: "Bell Marker Brewery and Kitchen ",
    location: [32.7158508, -117.159088],
    type:   4
  },

{
    name: "Benchmark Brewing",
    location: [32.7872447, -117.102069],
    type:   1
  },

{
    name: "Bitter Brothers Brewing",
    location: [32.8157824, -117.220163],
    type:   1
  },

{
    name: "Black Plague Brewing",
    location: [33.2156117, -117.266739],
    type:   1
  },

{
    name: "BNS Brewing &amp; Distilling",
    location: [32.8466231, -116.958363],
    type:   1
  },

{
    name: "Bolt Brewing Co.",
    location: [32.7718969, -117.020593],
    type:   1
  },

{
    name: "Booze Brothers Brewing Co.",
    location: [33.1481820, -117.218142],
    type:   1
  },

{
    name: "Border X Brewing",
    location: [32.5567267, -116.956773],
    type:   1
  },

{
    name: "Breakwater Brewing Company",
    location: [33.1950924, -117.379126],
    type:   1
  },

{
    name: "Burgeon Beer Company",
    location: [33.1197823, -117.272939],
    type:   1
  },

{
    name: "Burning Beard Brewing Company",
    location: [32.8117415, -116.972410],
    type:   1
  },

{
    name: "California Wild Ales *",
    location: [32.9050831, -117.215118],
    type:   1
  },

{
    name: "ChuckAlek Independent Brewers",
    location: [33.0277812, -116.889214],
    type:   1
  },

{
    name: "Chula Vista Brewery *",
    location: [32.6415632, -117.080332],
    type:   1
  },

{
    name: "Circle 9 Brewing",
    location: [32.8257279, -117.160757],
    type:   1
  },

{
    name: "Coronado Brewing Company",
    location: [32.6977694, -117.173232],
    type: 2
  },

{
    name: "Coronado Brewing Company",
    location: [32.7718721, -117.204578],
    type:   1
  },

{
    name: "Council Brewing Co.",
    location: [32.8319916, -116.979631],
    type:   1
  },

{
    name: "Council Brewing Co.",
    location: [32.8345474, -117.154451],
    type:   1
  },

{
    name: "Culture Brewing Co.",
    location: [32.9915796, -117.270711],
    type:   1
  },

{
    name: "Culver Beer Co.",
    location: [33.1326935, -117.258517],
    type:   1
  },

{
    name: "Deft Brewing",
    location: [32.7643879, -117.198939],
    type:   1
  },

{
    name: "Division 23 Brewing",
    location: [32.8903390, -117.162898],
    type:   1
  },

{
    name: "Dos Desperados Brewing",
    location: [33.1369175, -117.193424],
    type:   1
  },

{
    name: "Duck Foot Brewing Co.",
    location: [32.8854988, -117.156392],
    type:   1
  },

{
    name: "Ebullition Brew Works",
    location: [33.1537956, -117.224160],
    type:   1
  },

{
    name: "Embarcadero Brewing &amp; Supply Company *",
    location: [32.6583739, -117.104689],
    type:   1
  },

{
    name: "Eppig Brewing",
    location: [32.7555796, -117.128750],
    type:   1
  },

{
    name: "Escondido Brewing Company",
    location: [33.1245770, -117.097008],
    type:   1
  },

{
    name: "Fall Brewing Co.",
    location: [32.7598158, -117.130460],
    type:   1
  },

{
    name: "Fallbrook Brewing Company",
    location: [33.3827003, -117.251516],
    type:   1
  },

{
    name: "Fourpenny House",
    location: [32.7648916, -117.018329],
    type:   1
  },

{
    name: "Gordon Biersch Brewery Restaurant",
    location: [32.7670751, -117.153910],
    type:   1
  },

{
    name: "Green Flash Brewing Co.",
    location: [32.9071098, -117.177758],
    type:   1
  },

{
    name: "Groundswell Brewing Co.",
    location: [32.7889952, -117.099787],
    type:   1
  },

{
    name: "Groundswell Brewing Co.",
    location: [32.8307147, -116.976687],
    type:   1
  },

{
    name: "Guadalupe Brewery",
    location: [33.1395403, -117.274649],
    type:   1
  },

{
    name: "Half Door Brewing Co.",
    location: [32.7102641, -117.156271],
    type:   1
  },

{
    name: "Helm&#39;s Brewing",
    location: [32.8373203, -117.139067],
    type:   1
  },

{
    name: "Helix Brewing Co.",
    location: [32.7720182, -117.023341],
    type:   1
  },

{
    name: "Hillcrest Brewing Company",
    location: [32.7491060, -117.149911],
    type:   1
  },

{
    name: "Home Brewing Co.",
    location: [32.7550890, -117.130994],
    type:   1
  },

{
    name: "Horus Aged Ales",
    location: [33.2435330, -117.309126],
    type:   1
  },

{
    name: "Indian Joe Brewing",
    location: [33.1694243, -117.224900],
    type:   1
  },

{
    name: "Intergalactic Brewing Co",
    location: [32.8987471, -117.120638],
    type:   1
  },

{
    name: "Iron Fist Brewing Company",
    location: [33.1450803, -117.239050],
    type:   1
  },

{
    name: "Jacked Up Brewing",
    location: [33.1172440, -117.091650],
    type:   1
  },

{
    name: "Jamul Brewing Co.",
    location: [32.7169988, -116.876134],
    type:   1
  },

{
    name: "Julian Brewing Company *",
    location: [33.0793706, -116.603838],
    type: 2
  },

{
    name: "Karl Strauss 4S Ranch",
    location: [33.0214603, -117.113403],
    type:   4
  },

{
    name: "Karl Strauss Carlsbad",
    location: [33.1244064, -117.314015],
    type:   4
  },

{
    name: "Karl Strauss Downtown",
    location: [32.7174547, -117.167075],
    type:   4
  },

{
    name: "Karl Strauss La Jolla",
    location: [32.8471174, -117.273536],
    type:   4
  },

{
    name: "Karl Strauss",
    location: [32.8320492, -117.231234],
    type:  4
  },

{
    name: "Karl Strauss Sorrento Mesa",
    location: [32.8965350, -117.201764],
    type:   1
  },

{
    name: "Kensington Brewing Company",
    location: [32.7630155, -117.107906],
    type:   1
  },

{
    name: "Ketch Brewing *",
    location: [32.8132612, -117.155289],
    type:   1
  },

{
    name: "Kilowatt Brewing Company",
    location: [32.8331085, -117.156369],
    type:   1
  },

{
    name: "KnB Brewery",
    location: [32.7840052, -117.059929],
    type:   1
  },

{
    name: "Knotty Brewing Co.",
    location: [32.7117775, -117.156851],
    type:   1
  },

{
    name: "Kuracali Sake &amp; Beer Brewery",
    location: [33.1616463, -117.201259],
    type:   1
  },

{
    name: "KO Brewery Restaurant &amp; Bar *",
    location: [32.7191663, -117.160527],
    type: 3
  },

{
    name: "Latchkey Brewing ",
    location: [32.7419090, -117.183519],
    type: 2
  },

{
    name: "La Jolla Beer Co.",
    location: [32.8407895, -117.274454],
    type: 3
  },

{
    name: "Latitude 33 Brewing Company",
    location: [33.1360340, -117.224863],
    type: 2
  },

{
    name: "Legacy Brewing Company",
    location: [33.2153901, -117.350769],
    type: 2
  },

{
    name: "Lightning Brewery *",
    location: [32.9354924, -117.043507],
    type: 2
  },

{
    name: "Little Miss Brewing",
    location: [32.8925649, -117.148444],
    type: 2
  },

{
    name: "Longship Brewery",
    location: [32.9040608, -117.171463],
    type: 2
  },

{
    name: "Mason Ale Works",
    location: [33.1720729, -117.359122],
    type: 2
  },

{
    name: "Mason Ale Works",
    location: [33.1358939, -117.158564],
    type: 2
  },

{
    name: "Midnight Jack Brewing Company *",
    location: [33.2051540, -117.304625],
    type: 2
  },

{
    name: "Mike Hess Brewing",
    location: [32.7476888, -117.128543],
    type: 2
  },

{
    name: "Mikkeller Brewing San Diego",
    location: [32.8923805, -117.144738],
    type: 2
  },

{
    name: "Mission Brewery",
    location: [32.7071477, -117.151591],
    type: 2
  },

{
    name: "Modern Times",
    location: [32.7542044, -117.206198],
    type: 2
  },

{
    name: "Monkey Paw Pub &amp; Brewery",
    location: [32.7138573, -117.149246],
    type: 2
  },
{
    name: "Mother Earth Brew Company",
    location: [33.1677133, -117.220317],
    type: 2
  },

{
    name: "New English Brewing Company",
    location: [32.9127354, -117.230605],
    type: 2
  },

{
    name: "Nickel Beer Company",
    location: [33.0765814, -116.590543],
    type: 2
  },

{
    name: "North Park Beer Co",
    location: [32.7487183, -117.129117],
    type: 2
  },

{
    name: "Northern Pine Brewing Company",
    location: [33.1998358, -117.376933],
    type: 2
  },

{
    name: "Novo Brazil Brewing Co.",
    location: [32.6520158, -116.961418],
    type: 2
  },

{
    name: "OB Brewery",
    location: [32.7472201, -117.251972],
    type: 2
  },

{
    name: "Oceanside Ale Works",
    location: [33.2116113, -117.272715],
    type: 2
  },

{
    name: "Oceanside Brewing Company *",
    location: [33.2128018, -117.352237],
    type: 2
  },

{
    name: "Oggi&#39;s Pizza and Brewing Company",
    location: [32.9805356, -117.073524],
    type: 2
  },

{
    name: "O&#39;Sullivan Brother&#39;s Brewing",
    location: [32.9132595, -117.112779],
    type: 2
  },

{
    name: "Papa Marce&#39;s Cerveceria",
    location: [33.1345148, -117.270091],
    type: 2
  },

{
    name: "Pacific Beach Ale House",
    location: [32.7943249, -117.255348],
    type: 2
  },

{
    name: "Pacific Islander Beer Co.",
    location: [32.8328875, -116.988967],
    type: 2
  },

{
    name: "Pariah Brewing Company",
    location: [32.7555796, -117.128750],
    type: 2
  },

{
    name: "Pizza Port Bressi Ranch",
    location: [33.1286712, -117.250066],
    type: 2
  },

{
    name: "Pizza Port Carlsbad",
    location: [33.1599094, -117.347737],
    type: 2
  },

{
    name: "Pizza Port Ocean Beach",
    location: [32.7479652, -117.250302],
    type: 2
  },

{
    name: "Pizza Port Solana Beach",
    location: [32.9929230, -117.272216],
    type: 2
  },

{
    name: "Plan 9 Ale House",
    location: [33.1219384, -117.080178],
    type: 3
  },

{
    name: "Poor House Brewing Company *",
    location: [32.7589732, -117.130388],
    type: 2
  },

{
    name: "Port Brewing / The Lost Abbey",
    location: [33.1416287, -117.149361],
    type: 2
  },

{
    name: "Prodigy Brewing Company",
    location: [33.1433723, -117.166144],
    type: 2
  },

{
    name: "Prohibition Brewing Company",
    location: [33.2304468, -117.226594],
    type: 2
  },

{
    name: "Protector Brewery",
    location: [32.8966532, -117.137275],
    type: 2
  },

{
    name: "Pure Project Brewing",
    location: [32.8866311, -117.157127],
    type: 2
  },

{
    name: "Quantum Brewing Co.",
    location: [32.8308894, -117.138401],
    type: 2
  },

{
    name: "Reckless Brewing Co.",
    location: [32.8880071, -117.159608],
    type:   1
  },

{
    name: "Resident Brewing Co.",
    location: [32.7165795, -117.160588],
    type:   1
  },

{
    name: "Rip Current Brewing Co.",
    location: [32.7523763, -117.129937],
    type:   1
  },

{
    name: "Rip Current Brewing Co.",
    location: [33.1427524, -117.192507],
    type:   1
  },

{
    name: "Rock Bottom Brewery Restaurant La Jolla",
    location: [32.8712909, -117.234266],
    type: "tasting room / restaurant"
  },

{
    name: "Rough Draft Brewing Company",
    location: [32.8834869, -117.171785],
    type: "tasting room / restaurant"
  },

{
    name: "Rouleur Brewing Company",
    location: [33.1345148, -117.270091],
    type: 1
  },

{
    name: "San Diego Brewing Company",
    location: [32.7921228, -117.099174],
    type: "tasting room / restaurant"
  },

{
    name: "San Diego Brewing Company",
    location: [32.7555796, -117.128750],
    type: "tasting room / restaurant"
  },

{
    name: "San Marcos Brewery &amp; Grill",
    location: [33.1344351, -117.190968],
    type: "tasting room / restaurant"
  },

{
    name: "Second Chance Beer Co.",
    location: [32.9947534, -117.082074],
    type: "tasting room / restaurant"
  },

{
    name: "Smoking Cannon Brewery",
    location: [33.0436042, -116.864990],
    type: 2
  },

{
    name: "Societe Brewing Co.",
    location: [32.8338579, -117.146373],
    type: 2
  },

{
    name: "South Park Brewing Co.",
    location: [32.7220418, -117.129899],
    type: "tasting room / restaurant"
  },

{
    name: "SR76 Brewery",
    location: [33.2675940, -116.955438],
    type: 1
  },

{
    name: "Saint Archer Brewing Co.",
    location: [32.8804822, -117.163465],
    type: "tasting room / subsidary of MillerCoors"
  },

{
    name: "Stone Brewing Company",
    location: [33.1158112, -117.120011],
    type: "tasting room / restaurant"
  },

{
    name: "Stone Brewing Liberty Station",
    location: [32.7406063, -117.211481],
    type: "tasting room / restaurant"
  },

{
    name: "Stumblefoot Brewing Company",
    location: [33.1049415, -117.219314],
    type:   1
  },

{
    name: "Thorn Brewing Co.",
    location: [32.7021405, -117.147753],
    type:   1
  },

{
    name: "Thorn St. Brewery",
    location: [32.7393987, -117.125498],
    type: "tasting room / food served by alternate"
  },

{
    name: "Thunderhawk Alements",
    location: [32.8957913, -117.137476],
    type:   1
  },

{
    name: "Toolbox Brewing",
    location: [33.1367570, -117.226846],
    type:   1
  },

{
    name: "Viewpoint Brewing Co.",
    location: [32.9699356, -117.261778],
    type:   1
  },

{
    name: "Wavelength Brewing Co.",
    location: [33.2031682, -117.241003],
    type:   1
  },

{
    name: "White Labs",
    location: [32.8957219, -117.121373],
    type:   1
  },

{
    name: "Wild Barrel Brewing",
    location: [33.1401470, -117.145759],
    type:   1
    },

{
    name: "Wiseguy Brewing Co.",
    location: [33.1345148, -117.270091],
    type:   1
  },



];


// Loop through the array and create one marker for each brewery object
for (var i = 0; i < breweries.length; i++) {

  // Conditionals for breweries type
  var color = "";
  if (breweries[i].type >5 ) {
    color = "yellow";
  }
  else if (breweries[i].type >4 ) {
    color = "blue";
  }
  else if (breweries[i].type >3 ) {
    color = "blue";
  }
  else if (breweries[i].type >2 ) {
    color = "blue";
  }
  else if (breweries[i].type >1) {
    color = "green";
  }
  else {
    color = "red";
  }

  // Add circles to map
  L.circle(breweries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius:  1000
  }).bindPopup("<h1>" + breweries[i].name + "</h1> <hr> <h3>type: " + breweries[i].type + "</h3>").addTo(myMap);
}
