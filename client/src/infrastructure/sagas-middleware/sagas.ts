import { SagaIterator } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as Actions from '../actions/actions';
import * as ActionTypes from '../actions/actionTypes';
import { coordinates } from '../selectors';
import { getCurrentWeather } from './api';
import { moqCurrentWeather } from './mockData';
import { Location, CurrentWeather } from '../store/state';

const getUserLocation = (options: PositionOptions): Promise<Position> =>
    new Promise<Position>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(location => resolve(location), error => reject(error), options);
    });

function* getCoordinates() {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    try {
        const coords = yield call(getUserLocation, options);
        const { latitude, longitude } = coords.coords;
        yield put(Actions.getCoordinatesComplete({ latitude, longitude }));
    } catch {
        yield put(Actions.getCoordinatesFailure());
    }
}

function* getCurrent() {
    try {
        const location = yield select(coordinates);
        const result = yield call(getCurrentWeather, location.coordinates);
        let weather: CurrentWeather;
        if (result.error) {
            // for offline development purposes
            weather = moqCurrentWeather;
        } else {
            weather = result.data;
        }
        yield put(Actions.getCurrentWeatherComplete(weather));
        const locationPayload: Location = {
            city: weather.name,
            country: weather.sys.country,
        };
        yield put(Actions.setLocation(locationPayload));
    } catch {
        yield put(Actions.getCurrentWeatherFailure());
    }
}

function* watch(): SagaIterator {
    yield takeEvery(ActionTypes.GET_COORDINATES_REQUEST, getCoordinates);
    yield takeEvery(ActionTypes.GET_COORDINATES_SUCCESS, getCurrent);
}

export default watch;
