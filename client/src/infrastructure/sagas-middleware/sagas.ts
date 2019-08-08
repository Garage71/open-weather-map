import { SagaIterator } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as Actions from '../actions/actions';
import * as ActionTypes from '../actions/actionTypes';
import { coordinates } from '../selectors';
import { getCurrentWeather, getForecastWeather } from './api';
import { moqCurrentWeather, moqForecast } from './mockData';
import { Location, CurrentWeather, Coords } from '../store/state';

interface ActionInterface<T = {}> {
    type: string;
    payload?: T;
}

class Action<T = {}> implements ActionInterface<T> {
    public type: string;
    public payload?: T;
}

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

function* getForecast(action: Action<Coords>) {
    try {
        const coords = action.payload;
        const result = yield call(getForecastWeather, coords);
        let forecast: CurrentWeather[];
        if (result.error) {
            // for offline development purposes
            forecast = moqForecast;
        } else {
            forecast = result.data.list;
        }
        yield put(Actions.getForecastComplete(forecast));
    } catch {
        yield put(Actions.getForecastFailure());
    }
}

function* watch(): SagaIterator {
    yield takeEvery(ActionTypes.GET_COORDINATES_REQUEST, getCoordinates);
    yield takeEvery(ActionTypes.GET_COORDINATES_SUCCESS, getCurrent);
    yield takeEvery(ActionTypes.GET_FORECAST_REQUEST, getForecast);
}

export default watch;
