const axios = require('axios');

const getPlaceLatLng = async (location) => {
    // Preparando direccion 
    const encodedUrl = encodeURI(location);
    
    // Creación instancia de peticion Axios
    const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
            headers: {'X-RapidAPI-Key': 'DIDuMSgjj9mshBLEx1WEDALeHDmsp1wOFtpjsnulPPgfF1QuWl'}
    });
    
    // Promise
    // Llamo a la instancia y hago la request
    const resp = await instance.get();
    
    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${location}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getPlaceLatLng
}
    
