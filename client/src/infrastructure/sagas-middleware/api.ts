import axios from 'axios';
import { Coords } from '../store/state';

export const getCurrentWeather = async (payload: Coords): Promise<any> => {
    try {
        const response = await axios.post<any>('/api/currentByCoordinates', payload);
        if (!response.status) {
            return { error: new Error('Failure') };
        }
        return { data: response.data };
    } catch (e) {
        return { error: e };
    }
};
