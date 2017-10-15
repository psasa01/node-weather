const request = require('request');

const geocode = require('../geocode/geocode');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/012b1089f6bca5ab119323674c411da1/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports.getWeather = getWeather;
