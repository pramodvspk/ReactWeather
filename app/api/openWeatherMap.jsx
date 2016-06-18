var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3118b53e24d853d8c64603f17647d575&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      debugger;
        if(res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          console.log(res.data.main.temp)
          return res.data.main.temp;
        }
    }, function (res) {
        throw new Error(res.data.message);
    });
  }
}
