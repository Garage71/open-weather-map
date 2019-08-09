import { createSelector } from 'reselect';
import { State, CurrentWeather } from '../store/state';
import { CurrentWeatherPresentation } from './presentationContracts';
import { unixTimeToLocalDateTime, unixTimeToLocal } from '../utils/time';

export const coordinates = (state: State) => state.location;
export const weather = (state: State) => state.currentWeather;
export const forecast = (state: State) => state.forecast;

const getWindDirection = (angle: number): string => {
    if (angle >= 0 && angle < 25) return 'North';
    if (angle >= 25 && angle < 70) return 'Northeast';
    if (angle >= 70 && angle < 115) return 'East';
    if (angle >= 115 && angle < 160) return 'Southeast';
    if (angle >= 160 && angle < 205) return 'South';
    if (angle >= 205 && angle < 250) return 'Southwest';
    if (angle >= 250 && angle < 295) return 'West';
    if (angle >= 295 && angle < 340) return 'Northwest';
    if (angle >= 340) return 'North';
    return 'No wind';
};

const mapPresentation = (raw: CurrentWeather): CurrentWeatherPresentation => {
    const view: CurrentWeatherPresentation = {
        cloudiness: `${raw.clouds.all} %`,
        dateTime: unixTimeToLocalDateTime(raw.dt),
        humidity: `${raw.main.humidity} %`,
        iconUrl: `http://openweathermap.org/img/wn/${raw.weather[0].icon}@2x.png`,
        pressure: `${raw.main.pressure} hpa`,
        temperature: `${raw.main.temp} °C`,
        weatherCondition: raw.weather[0].main,
        wind: `${raw.wind.speed} m/s, ${getWindDirection(raw.wind.deg)}`,
    };
    if (raw.sys) {
        view.location = `${raw.name}, ${raw.sys.country}`;
        view.sunrise = unixTimeToLocal(raw.sys.sunrise);
        view.sunset = unixTimeToLocal(raw.sys.sunset);
    }
    if (raw.coord) {
        view.geoCoords = `[${raw.coord.lat.toFixed(2)}, ${raw.coord.lon.toFixed(2)}]`;
    }
    if (raw.rain) {
        view.rain = `${raw.rain['1h']} mm`;
    }
    if (raw.snow) {
        view.snow = `${raw.snow['1h']} mm`;
    }
    return view;
};

export const currentWeatherView = createSelector(
    weather,
    (raw): CurrentWeatherPresentation => {
        return mapPresentation(raw);
    },
);

export const forecastView = createSelector(
    forecast,
    (raw: CurrentWeather[]): CurrentWeatherPresentation[] => {
        return raw ? raw.map(_ => mapPresentation(_)) : [];
    },
);

export const forecast24H = createSelector(
    forecast,
    (raw: CurrentWeather[]): CurrentWeather[] => {
        return raw.slice(0, 9);
    },
);
