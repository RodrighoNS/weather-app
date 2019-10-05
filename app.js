const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    loctn: {
        alias: 'd',
        desc: 'Direccion ciudad para obtener el clima',
        demand: true
    }
}).argv;

// Entrega coords dada una location
const getInfo = async (location) => {
    try {
        const coords = await place.getPlaceLatLng(location);
        const temp = await weather.getClima(coords.lat, coords.lng);    

        return `El clima en ${coords.dir} es de ${temp}`; 
    } catch (err) {
        return `No se logro determinar la temperatura de ${location}`;
    }
};

getInfo(argv.loctn)
    .then(console.log)
    .catch(console.log);