import * as ActionTypes from '../actions/actionTypes';
import { Action } from '../actions/actions';
import { State, Coords } from '../store/state';
import { initialState } from '../store/initialState';

export default (state = initialState, action: Action): State => {
    switch (action.type) {
        case ActionTypes.GET_COORDINATES_SUCCESS:
            const newCoordinates = action.payload as Coords;
            const location = { ...state.location };
            location.coordinates = { ...newCoordinates };
            return {
                ...state,
                location,
            };
        default:
            return initialState;
    }
};
