//SERVICE
weatherApp.service('cityService', function() {
    this.city = 'Koper, SI';
    
});


weatherApp.service('weatherService', ['$resource', function($resource) {
    
    this.GetWeather =  function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=44db6a862fba0b067b1930da0d769e98", {
            callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});

            return weatherResult = weatherAPI.get({ q: city, cnt: days });          
    };       
}]);
