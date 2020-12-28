import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'ec743fd08eb0b6480d6b367e93ef898d';

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,

        }
    });
    return data;
}