const key= 'sLdhsklSCHrcoLXyKh3xGPBWw6ecu8KA';

// get city details

const cityLocation = async (city)=>{
const base= 'http://dataservice.accuweather.com/locations/v1/cities/search';
const query= `?apikey=${key}&q=${city}`;
const responce = await fetch(base +query);
const data =await responce.json();
return data[0]
}

// get weather details

const getWeather= async (id)=>{
    const base= 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query= `${id}?apikey=${key}`;
    const responce = await fetch(base +query);
    const data= await responce.json();
    return data[0]
}