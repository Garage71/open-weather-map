import * as ActionTypes from '../actions/actionTypes';
import { Action } from '../actions/actions';
import { CurrentWeather } from '../store/state';
import { initialState } from '../store/initialState';

export default (state = initialState.forecast, action: Action): CurrentWeather[] => {
    switch (action.type) {
        case ActionTypes.GET_FORECAST_SUCCESS:
            const forecast = action.payload as CurrentWeather[];
            return forecast;
        default:
            return state;
    }
};
