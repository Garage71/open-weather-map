import * as ActionTypes from './actionTypes';
import { Coords, CurrentWeather, Location } from '../store/state';

export interface Action<T = {}> {
    type: string;
    payload?: T;
}

export class Action<T = {}> implements Action<T> {
    public type!: string;
    public payload?: T;
}

export const getCoordinates = (): Action => {
    return {
        type: ActionTypes.GET_COORDINATES_REQUEST,
    };
};

export const getCoordinatesComplete = (payload: Coords): Action => {
    return {
        type: ActionTypes.GET_COORDINATES_SUCCESS,
        payload,
    };
};

export const getCoordinatesFailure = (): Action => {
    return {
        type: ActionTypes.GET_COORDINATES_FAILURE,
    };
};

export const getCurrentWeather = (payload: Coords): Action => {
    return {
        type: ActionTypes.GET_CURRENT_WEATHER_REQUEST,
        payload,
    };
};

export const getCurrentWeatherComplete = (payload: CurrentWeather): Action => {
    return {
        type: ActionTypes.GET_CURRENT_WEATHER_SUCCESS,
        payload,
    };
};

export const getCurrentWeatherFailure = (): Action => {
    return {
        type: ActionTypes.GET_CURRENT_WEATHER_FAILURE,
    };
};

export const setLocation = (payload: Location): Action => {
    return {
        type: ActionTypes.SET_LOCATION,
        payload,
    };
};
