const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/c2768b02d8506bc097a3fe5276ac8ed6/${latitude},${longitude}`;
    request({url, json: true}, (error, {body}) => {

        if (error) {
            callback(`Unable to connect to weather service: ${error}`, undefined)
        } else if (body.error) {
            callback(`Body error: ${body.error}`, undefined)
        } else {
            // const data = JSON.parse(response.body);
            const currently = body.currently;
            const daily = body.daily;

            callback(undefined, {
                currently,
                daily
            })

            // console.log(`It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rains`)
        }

    })
};

module.exports = forecast;