import axios from 'axios';
import { Coords } from '../store/state';

export const getCurrentWeather = async (payload: Coords): Promise<any> => {
    try {
        const response = await axios.post<any>('http://localhost:3000/api/currentByCoordinates', payload);
        if (response.status !== 200) {
            return { error: new Error('Get current weather API call failure') };
        }
        return { data: response.data };
    } catch (e) {
        return { error: e };
    }
};
