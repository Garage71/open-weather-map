import * as ActionTypes from '../actions/actionTypes';
import { Action } from '../actions/actions';
import { Location, Coords } from '../store/state';
import { initialState } from '../store/initialState';

export default (state = initialState.location, action: Action): Location => {
    switch (action.type) {
        case ActionTypes.GET_COORDINATES_SUCCESS:
            const newCoordinates = action.payload as Coords;
            const location = (state as unknown) as Location;
            location.coordinates = { ...newCoordinates };
            return {
                ...location,
            };
        case ActionTypes.SET_LOCATION:
            const loc = action.payload as Location;
            const newState = { ...state };
            newState.city = loc.city;
            newState.country = loc.country;
            return newState;
        default:
            return state;
    }
};
