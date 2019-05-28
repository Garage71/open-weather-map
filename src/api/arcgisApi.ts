import axios from 'axios';
import * as apiKeys from './apiKeys.json';

import TokenService from '../services/tokenService';

const suggestEndpoint = 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?';
const findAddressCandidatesEndpoint =
    'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?';

export const suggest = async (text: string): Promise<object[]> => {
    const tokenService: TokenService = TokenService.instance;
    let token = tokenService.getToken();
    if (!token) {
        token = await tokenService.obtainToken(apiKeys.arcgisKey, apiKeys.arcgisSecret);
    }
    try {
        const url = `${suggestEndpoint}&text=${text}&token=${token}&f=json`;
        const response = await axios.get(url);
        return response.data;
    } catch (ex) {
        console.log(ex);
        token = tokenService.getToken();
        const url = `${suggestEndpoint}&text=${text}&token=${token}&f=json`;
        const response = await axios.get(url);
        return response.data;
    }
};

export const getCoordinates = async (magicKey: string): Promise<object[]> => {
    const tokenService: TokenService = TokenService.instance;
    let token = tokenService.getToken();
    if (!token) {
        token = await tokenService.obtainToken(apiKeys.arcgisKey, apiKeys.arcgisSecret);
    }
    try {
        const url = `${findAddressCandidatesEndpoint}&magicKey=${magicKey}&token=${token}&f=json`;
        const response = await axios.get(url);
        return response.data;
    } catch (ex) {
        console.log(ex);
        token = tokenService.getToken();
        const url = `${findAddressCandidatesEndpoint}&magicKey=${magicKey}&token=${token}&f=json`;
        const response = await axios.get(url);
        return response.data;
    }
};
