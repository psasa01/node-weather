const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const weather = require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (err, weatherResults) => {
            if (err) {
                console.log(err);
            } else {
                var tempCelsius = ((weatherResults.temperature - 32) * 0.5556);
                var tempCelsFixed = tempCelsius.toFixed(2);
                var apparentCelsius = ((weatherResults.apparentTemperature - 32) * 0.5556);
                var apparentCelsFixed = apparentCelsius.toFixed(2);
                console.log(`It's currently ${tempCelsFixed} deg C. It feels like ${apparentCelsFixed} deg C`);
            }
        });
    };
});
