import * as ActionTypes from '../actions/actionTypes';
import { Action } from '../actions/actions';
import { CurrentWeather } from '../store/state';
import { initialState } from '../store/initialState';

export default (state = initialState.currentWeather, action: Action): CurrentWeather => {
    switch (action.type) {
        case ActionTypes.GET_CURRENT_WEATHER_SUCCESS:
            const currentWeather = action.payload as CurrentWeather;
            return currentWeather;
        default:
            return state;
    }
};
