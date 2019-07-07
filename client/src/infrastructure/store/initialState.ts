import { State } from './state';

export const initialState: State = {
    location: {
        coordinates: {
            latitude: 0,
            longitude: 0,
        },
        country: '',
        city: '',
    },
    currentWeather: {
        clouds: {
            all: 0,
        },
        coord: {
            lat: 0,
            lon: 0,
        },
        main: {
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0,
        },
        rain: {
            '1h': 0,
            '3h': 0,
        },
        snow: {
            '1h': 0,
            '3h': 0,
        },
        sys: {
            country: '',
            sunrise: 0,
            sunset: 0,
        },
        timezone: 0,
        visibility: 0,
        weather: [
            {
                description: '',
                icon: '',
                id: 0,
                main: '',
            },
        ],
        wind: {
            deg: 0,
            speed: 0,
        },
        dt: 0,
        name: '',
    },
};
