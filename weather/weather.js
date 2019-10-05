const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=aa0df72e798dabfb67a23a0c407d72f0&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}