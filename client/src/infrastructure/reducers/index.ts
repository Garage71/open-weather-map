import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import weatherReducer from './weatherReducer';
import forecastReducer from './forecastReducer';

export default combineReducers({
    location: locationReducer,
    currentWeather: weatherReducer,
    forecast: forecastReducer,
});
