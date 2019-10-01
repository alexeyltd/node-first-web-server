const request = require('request');

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1IjoiYWxleGV5bHRkIiwiYSI6ImNrMTUwcWdiajBxM3QzbW51NHY4aXJ0NXgifQ.shr55-U-jzyZYPtZTgx5KA`;
    request({url, json: true}, (error, {body}) => {

        if (error) {
            callback(`Error: ${error}`, undefined)
        } else if (body.features.lenght === 0) {
            callback(`Unable to find location`, undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

    })
};

module.exports = geoCode;