import axios from 'axios';

const API_KEY = '7787a672ee1c9843860c5132588fdf79';

const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},IN`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}