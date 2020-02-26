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

// requestEvents("Austin")

function requestMaps(maps){
    axios.get(`https://www.google.com/maps/embed/v1/place
    ?key=AIzaSyAG-uv9xEOb8Dxl8A5pXUdvBZfdZCHjMjg
    &q=Eiffel+Tower,Paris+France`).then(function(data){
        console.log(data)
    })
}

requestMaps("Paris")



module.exports = {
    apiWeather: apiWeather,
    requestWeather: requestWeather
}