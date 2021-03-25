var axios = require('axios');

const OPEN_WEAHTER_MAP_URL = "https://api.openweathermap.org/data/2.5/weather?appid=3a9b9da49778a0bc498eb789617992bc&units=imperial";

module.exports =  {
    getTemp: function(location){
        var encodeLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEAHTER_MAP_URL}&q=${encodeLocation}`;

        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else{
                return res.data.main.temp;
            }
            
        },function(res){
            throw new Error(res.data.message);
        });
    }
}