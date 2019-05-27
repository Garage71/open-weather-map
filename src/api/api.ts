import axios from 'axios';
import * as apiKey from './apiKey.json';

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const owmKey = apiKey.owmKey;

export const getCurrentByCoordinates = async (lattitude: number, logitude: number): Promise<object> => {
    const url = `${baseUrl}weather/?lat=${lattitude}&lon=${logitude}&appid=${owmKey}&units=metric`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (ex) {
        console.log(ex);
        return {};
    }
};

export const getForecastByCoordinates = async (lattitude: number, logitude: number): Promise<object> => {
    const url = `${baseUrl}forecast/?lat=${lattitude}&lon=${logitude}&appid=${owmKey}&units=metric`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (ex) {
        console.log(ex);
        return {};
    }
};
