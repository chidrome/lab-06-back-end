// Load dotenv variables
require('dotenv').config();

// Load requires
const express = require('express');


// Declare express app
const app = express();



// Declare your routes
// home route
app.get('/', (req, res) => {
  res.send('STUB ROUTE');
});

// searh route
app.get('/location', (req, res) => {
  try{
    let location = require('../data/geo.json');
    console.log(location.results);
    let newLocation = new SearchLocation('seattle', 'Seattle, WA, USA', location.results[0].geometry.location.lat, location.results[0].geometry.location.lng);
    res.send(newLocation);
  }catch(error) {
    console.log(`There's been an ERRRRRRRRRRor getting your location! ${error}`);
  }
});

// app.get('/sudip', (req, res) => {
//     require('../data/geo.json');
//   .then((results) => {

//   })
//     res.send(location);
//   }catch(error) {
//     console.log(`There's been an ERRRRRRRRRRor getting your location! ${error}`);
//   }
// });


// Setup listener
app.listen(process.env.PORT || 8000, function(){
  console.log('Now listening to the smooth sounds of port 8000');
});


//helper functions

function SearchLocation(locationName, formatted_query, lat, lng) {
  this.search_query = locationName;
  this.formatted_query = formatted_query;
  this.latitude = lat;
  this.longitutde = lng;
}

