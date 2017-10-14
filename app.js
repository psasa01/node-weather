/* const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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

geocode.geocodeAddress(argv.address, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
});


*/

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/012b1089f6bca5ab119323674c411da1/43.8261875,18.3509568',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to server!');
    } else if (response.statusCode === 400) {
        console.log('Unable to fetch weather');
    } else if (response.statusCode === 200) {
        console.log(body.currently.temperature);
    }
});
