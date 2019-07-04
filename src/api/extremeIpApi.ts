import axios from 'axios';

const baseUrl = 'https://extreme-ip-lookup.com/json/';

export const getCoordsByIp = async (ip: string): Promise<Record<string, object>> => {
    const url = `${baseUrl}${ip}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (ex) {
        console.log(ex);
        return {};
    }
};
