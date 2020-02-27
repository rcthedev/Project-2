const axios = require("axios")


const apiWeather = {
    key: "b4ea2bed4153c798555b4bc2134b6d44",
    base: "https://api.openweathermap.org/data/2.5/forecast?q="
  };

function requestWeather(query){
    axios.get(`${api.base}${query}&APPID=${api.key}&units=Imperial`).then(function(data){
        console.log(data)
    })
}

// requestWeather("Atlanta")




// 


function requestEvents(city){
    axios.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&city=${city}`
    ).then(function(data){
        console.log(data)
    })
    
}

requestEvents("Austin")


let axios=require('axios');
function requestMaps(maps){
    axios.get("https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=AIzaSyDAYTt94WSv-TxMcYTyaL3tI07hEA8V3MY")
    .then(function(data){
        console.log(data)
})
}
// requestMaps()


module.exports = {
    apiWeather: apiWeather,
    requestWeather: requestWeather
}


// OpenTable API
let city = "Tucson";
let price = 4;

const ApiUrl = `https://opentable.herokuapp.com/api/restaurants?city=${city}&price=${price}`;

requestTable();
                                  
function requestTable(){

    axios.get(ApiUrl)
  .then(function (response) {
    // handle success
    console.log("success");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}

// Active API

const activeAPI = {
    key: "ZMN3XNT7PBT6YJSF2ATU2J2K",
    base: "http://api.amp.active.com/v2/search/?current_page=1&per_page=10&sort=distance&exclude_children=true&api_key=zmn3xnt7pbt6yjsf2atu2j2k"
};

function requestActive(){
    axios.get(`http://api.amp.active.com/v2/search/?current_page=1&per_page=10&sort=distance&exclude_children=true&api_key=zmn3xnt7pbt6yjsf2atu2j2k=${near}`).then(function(data) {
        console.log(data)
    })
}