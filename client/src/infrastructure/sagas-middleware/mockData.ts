import { CurrentWeather } from '../store/state';

export const moqCurrentWeather: CurrentWeather = {
    clouds: {
        all: 75,
    },
    coord: {
        lat: 60.05,
        lon: 30.32,
    },
    main: {
        humidity: 59,
        pressure: 1000,
        temp: 17.29,
        temp_max: 18.33,
        temp_min: 16.67,
    },
    sys: {
        country: 'RU',
        sunrize: 1562460441,
        sunset: 1562527162,
    },
    timezone: 10800,
    visibility: 10000,
    weather: [
        {
            description: 'broken clouds',
            icon: '04d',
            id: 803,
            main: 'Clouds',
        },
    ],
    wind: {
        deg: 300,
        speed: 2,
    },
    dt: 1562494794,
    name: 'Pargolovo',
};
