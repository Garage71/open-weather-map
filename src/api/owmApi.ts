import axios from 'axios';
import * as apiKeys from './apiKeys.json';

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const owmKey = apiKeys.owmKey;

export const getCurrentByCoordinates = async (latitude: number, logitude: number): Promise<object> => {
    const url = `${baseUrl}weather/?lat=${latitude}&lon=${logitude}&appid=${owmKey}&units=metric`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (ex) {
        console.log(ex);
        return null;
    }
};

export const getForecastByCoordinates = async (latitude: number, logitude: number): Promise<object> => {
    const url = `${baseUrl}forecast/?lat=${latitude}&lon=${logitude}&appid=${owmKey}&units=metric`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (ex) {
        console.log(ex);
        return null;
    }
};
