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
        sunrise: 1562460441,
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

export const moqForecast: CurrentWeather[] = [
    {
        dt: 1565254800,
        main: {
            temp: 22.09,
            temp_min: 18.87,
            temp_max: 22.09,
            pressure: 1005.38,
            sea_level: 1005.38,
            grnd_level: 1004.78,
            humidity: 64,
            temp_kf: 3.22,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 1.59,
            deg: 130.421,
        },
        dt_txt: '2019-08-08 09:00:00',
    },
    {
        dt: 1565265600,
        main: {
            temp: 23.07,
            temp_min: 20.66,
            temp_max: 23.07,
            pressure: 1004.09,
            sea_level: 1004.09,
            grnd_level: 1003.1,
            humidity: 61,
            temp_kf: 2.41,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
            },
        ],
        clouds: {
            all: 97,
        },
        wind: {
            speed: 0.32,
            deg: 343.56,
        },
        dt_txt: '2019-08-08 12:00:00',
    },
    {
        dt: 1565276400,
        main: {
            temp: 20.76,
            temp_min: 19.15,
            temp_max: 20.76,
            pressure: 1003.59,
            sea_level: 1003.59,
            grnd_level: 1002.74,
            humidity: 71,
            temp_kf: 1.61,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 2.43,
            deg: 17.285,
        },
        rain: {
            '3h': 0.562,
        },
        dt_txt: '2019-08-08 15:00:00',
    },
    {
        dt: 1565287200,
        main: {
            temp: 16.9,
            temp_min: 16.09,
            temp_max: 16.9,
            pressure: 1002.53,
            sea_level: 1002.53,
            grnd_level: 1001.88,
            humidity: 81,
            temp_kf: 0.8,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 3.14,
            deg: 63.027,
        },
        rain: {
            '3h': 0.063,
        },
        dt_txt: '2019-08-08 18:00:00',
    },
    {
        dt: 1565298000,
        main: {
            temp: 14.72,
            temp_min: 14.72,
            temp_max: 14.72,
            pressure: 1002.15,
            sea_level: 1002.15,
            grnd_level: 1001.42,
            humidity: 83,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 2.59,
            deg: 27.011,
        },
        dt_txt: '2019-08-08 21:00:00',
    },
    {
        dt: 1565308800,
        main: {
            temp: 14.52,
            temp_min: 14.52,
            temp_max: 14.52,
            pressure: 1001.66,
            sea_level: 1001.66,
            grnd_level: 1000.76,
            humidity: 87,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 3.22,
            deg: 10.512,
        },
        dt_txt: '2019-08-09 00:00:00',
    },
    {
        dt: 1565319600,
        main: {
            temp: 14.09,
            temp_min: 14.09,
            temp_max: 14.09,
            pressure: 1001.94,
            sea_level: 1001.94,
            grnd_level: 1001.19,
            humidity: 90,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 3.73,
            deg: 15.058,
        },
        dt_txt: '2019-08-09 03:00:00',
    },
    {
        dt: 1565330400,
        main: {
            temp: 16.09,
            temp_min: 16.09,
            temp_max: 16.09,
            pressure: 1002.41,
            sea_level: 1002.41,
            grnd_level: 1001.54,
            humidity: 80,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 3.42,
            deg: 18.398,
        },
        dt_txt: '2019-08-09 06:00:00',
    },
    {
        dt: 1565341200,
        main: {
            temp: 18.12,
            temp_min: 18.12,
            temp_max: 18.12,
            pressure: 1003.72,
            sea_level: 1003.72,
            grnd_level: 1002.84,
            humidity: 72,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 3.41,
            deg: 44.905,
        },
        dt_txt: '2019-08-09 09:00:00',
    },
    {
        dt: 1565352000,
        main: {
            temp: 19.42,
            temp_min: 19.42,
            temp_max: 19.42,
            pressure: 1004.31,
            sea_level: 1004.31,
            grnd_level: 1003.48,
            humidity: 64,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 3.36,
            deg: 40.618,
        },
        rain: {
            '3h': 0.124,
        },
        dt_txt: '2019-08-09 12:00:00',
    },
    {
        dt: 1565362800,
        main: {
            temp: 19.16,
            temp_min: 19.16,
            temp_max: 19.16,
            pressure: 1005.67,
            sea_level: 1005.67,
            grnd_level: 1004.95,
            humidity: 62,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 3.99,
            deg: 42.592,
        },
        dt_txt: '2019-08-09 15:00:00',
    },
    {
        dt: 1565373600,
        main: {
            temp: 16.36,
            temp_min: 16.36,
            temp_max: 16.36,
            pressure: 1006.91,
            sea_level: 1006.91,
            grnd_level: 1006.24,
            humidity: 68,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 2.52,
            deg: 9.608,
        },
        dt_txt: '2019-08-09 18:00:00',
    },
    {
        dt: 1565384400,
        main: {
            temp: 14.49,
            temp_min: 14.49,
            temp_max: 14.49,
            pressure: 1009.09,
            sea_level: 1009.09,
            grnd_level: 1008.5,
            humidity: 73,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 2.44,
            deg: 24.788,
        },
        dt_txt: '2019-08-09 21:00:00',
    },
    {
        dt: 1565395200,
        main: {
            temp: 13.93,
            temp_min: 13.93,
            temp_max: 13.93,
            pressure: 1010.24,
            sea_level: 1010.24,
            grnd_level: 1009.65,
            humidity: 73,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 1.25,
            deg: 16.594,
        },
        dt_txt: '2019-08-10 00:00:00',
    },
    {
        dt: 1565406000,
        main: {
            temp: 13.55,
            temp_min: 13.55,
            temp_max: 13.55,
            pressure: 1011.99,
            sea_level: 1011.99,
            grnd_level: 1011.48,
            humidity: 75,
            temp_kf: 0,
        },
        weather: [
            {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
            },
        ],
        clouds: {
            all: 0,
        },
        wind: {
            speed: 0.73,
            deg: 332.487,
        },
        dt_txt: '2019-08-10 03:00:00',
    },
    {
        dt: 1565416800,
        main: {
            temp: 17.34,
            temp_min: 17.34,
            temp_max: 17.34,
            pressure: 1012.72,
            sea_level: 1012.72,
            grnd_level: 1012.18,
            humidity: 61,
            temp_kf: 0,
        },
        weather: [
            {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
            },
        ],
        clouds: {
            all: 0,
        },
        wind: {
            speed: 0.3,
            deg: 5.194,
        },
        dt_txt: '2019-08-10 06:00:00',
    },
    {
        dt: 1565427600,
        main: {
            temp: 18.81,
            temp_min: 18.81,
            temp_max: 18.81,
            pressure: 1014.09,
            sea_level: 1014.09,
            grnd_level: 1013.43,
            humidity: 51,
            temp_kf: 0,
        },
        weather: [
            {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
            },
        ],
        clouds: {
            all: 0,
        },
        wind: {
            speed: 1.82,
            deg: 288.066,
        },
        dt_txt: '2019-08-10 09:00:00',
    },
    {
        dt: 1565438400,
        main: {
            temp: 19.9,
            temp_min: 19.9,
            temp_max: 19.9,
            pressure: 1014.06,
            sea_level: 1014.06,
            grnd_level: 1013.36,
            humidity: 50,
            temp_kf: 0,
        },
        weather: [
            {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
            },
        ],
        clouds: {
            all: 0,
        },
        wind: {
            speed: 2.82,
            deg: 296.583,
        },
        dt_txt: '2019-08-10 12:00:00',
    },
    {
        dt: 1565449200,
        main: {
            temp: 19.15,
            temp_min: 19.15,
            temp_max: 19.15,
            pressure: 1013.85,
            sea_level: 1013.85,
            grnd_level: 1013.14,
            humidity: 64,
            temp_kf: 0,
        },
        weather: [
            {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
            },
        ],
        clouds: {
            all: 0,
        },
        wind: {
            speed: 2.5,
            deg: 283.251,
        },
        dt_txt: '2019-08-10 15:00:00',
    },
    {
        dt: 1565460000,
        main: {
            temp: 16.65,
            temp_min: 16.65,
            temp_max: 16.65,
            pressure: 1013.66,
            sea_level: 1013.66,
            grnd_level: 1012.92,
            humidity: 73,
            temp_kf: 0,
        },
        weather: [
            {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
            },
        ],
        clouds: {
            all: 3,
        },
        wind: {
            speed: 1.33,
            deg: 140.283,
        },
        dt_txt: '2019-08-10 18:00:00',
    },
    {
        dt: 1565470800,
        main: {
            temp: 15.45,
            temp_min: 15.45,
            temp_max: 15.45,
            pressure: 1013.41,
            sea_level: 1013.41,
            grnd_level: 1012.77,
            humidity: 75,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
            },
        ],
        clouds: {
            all: 90,
        },
        wind: {
            speed: 2.7,
            deg: 158.711,
        },
        dt_txt: '2019-08-10 21:00:00',
    },
    {
        dt: 1565481600,
        main: {
            temp: 15.15,
            temp_min: 15.15,
            temp_max: 15.15,
            pressure: 1012.46,
            sea_level: 1012.46,
            grnd_level: 1011.9,
            humidity: 78,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
            },
        ],
        clouds: {
            all: 95,
        },
        wind: {
            speed: 2.89,
            deg: 182.516,
        },
        dt_txt: '2019-08-11 00:00:00',
    },
    {
        dt: 1565492400,
        main: {
            temp: 15.13,
            temp_min: 15.13,
            temp_max: 15.13,
            pressure: 1011.64,
            sea_level: 1011.64,
            grnd_level: 1010.76,
            humidity: 78,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 3.98,
            deg: 168.063,
        },
        rain: {
            '3h': 0.188,
        },
        dt_txt: '2019-08-11 03:00:00',
    },
    {
        dt: 1565503200,
        main: {
            temp: 16.58,
            temp_min: 16.58,
            temp_max: 16.58,
            pressure: 1010.77,
            sea_level: 1010.77,
            grnd_level: 1009.89,
            humidity: 86,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 5.07,
            deg: 181.287,
        },
        rain: {
            '3h': 1.312,
        },
        dt_txt: '2019-08-11 06:00:00',
    },
    {
        dt: 1565514000,
        main: {
            temp: 15.4,
            temp_min: 15.4,
            temp_max: 15.4,
            pressure: 1010.35,
            sea_level: 1010.35,
            grnd_level: 1009.8,
            humidity: 92,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 4.44,
            deg: 148.739,
        },
        rain: {
            '3h': 1.25,
        },
        dt_txt: '2019-08-11 09:00:00',
    },
    {
        dt: 1565524800,
        main: {
            temp: 16.97,
            temp_min: 16.97,
            temp_max: 16.97,
            pressure: 1009.12,
            sea_level: 1009.12,
            grnd_level: 1008.51,
            humidity: 88,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 3.31,
            deg: 156.472,
        },
        rain: {
            '3h': 0.938,
        },
        dt_txt: '2019-08-11 12:00:00',
    },
    {
        dt: 1565535600,
        main: {
            temp: 18.26,
            temp_min: 18.26,
            temp_max: 18.26,
            pressure: 1008.67,
            sea_level: 1008.67,
            grnd_level: 1007.7,
            humidity: 83,
            temp_kf: 0,
        },
        weather: [
            {
                id: 501,
                main: 'Rain',
                description: 'moderate rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 96,
        },
        wind: {
            speed: 3.72,
            deg: 227.574,
        },
        rain: {
            '3h': 5.562,
        },
        dt_txt: '2019-08-11 15:00:00',
    },
    {
        dt: 1565546400,
        main: {
            temp: 16.09,
            temp_min: 16.09,
            temp_max: 16.09,
            pressure: 1008.16,
            sea_level: 1008.16,
            grnd_level: 1007.56,
            humidity: 91,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 98,
        },
        wind: {
            speed: 1.85,
            deg: 265.976,
        },
        rain: {
            '3h': 1.438,
        },
        dt_txt: '2019-08-11 18:00:00',
    },
    {
        dt: 1565557200,
        main: {
            temp: 15.04,
            temp_min: 15.04,
            temp_max: 15.04,
            pressure: 1008.82,
            sea_level: 1008.82,
            grnd_level: 1008.35,
            humidity: 93,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
            },
        ],
        clouds: {
            all: 95,
        },
        wind: {
            speed: 2.38,
            deg: 193.504,
        },
        rain: {
            '3h': 0.625,
        },
        dt_txt: '2019-08-11 21:00:00',
    },
    {
        dt: 1565568000,
        main: {
            temp: 15.48,
            temp_min: 15.48,
            temp_max: 15.48,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 1008.55,
            humidity: 95,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
            },
        ],
        clouds: {
            all: 97,
        },
        wind: {
            speed: 3.52,
            deg: 231.068,
        },
        rain: {
            '3h': 2.687,
        },
        dt_txt: '2019-08-12 00:00:00',
    },
    {
        dt: 1565578800,
        main: {
            temp: 15.25,
            temp_min: 15.25,
            temp_max: 15.25,
            pressure: 1009.48,
            sea_level: 1009.48,
            grnd_level: 1009.02,
            humidity: 92,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 100,
        },
        wind: {
            speed: 3.76,
            deg: 228.775,
        },
        rain: {
            '3h': 0.875,
        },
        dt_txt: '2019-08-12 03:00:00',
    },
    {
        dt: 1565589600,
        main: {
            temp: 16.56,
            temp_min: 16.56,
            temp_max: 16.56,
            pressure: 1010.23,
            sea_level: 1010.23,
            grnd_level: 1009.71,
            humidity: 86,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 83,
        },
        wind: {
            speed: 4.77,
            deg: 237.369,
        },
        rain: {
            '3h': 0.063,
        },
        dt_txt: '2019-08-12 06:00:00',
    },
    {
        dt: 1565600400,
        main: {
            temp: 19.67,
            temp_min: 19.67,
            temp_max: 19.67,
            pressure: 1011.32,
            sea_level: 1011.32,
            grnd_level: 1010.61,
            humidity: 64,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 0,
        },
        wind: {
            speed: 4.24,
            deg: 271.553,
        },
        rain: {
            '3h': 0.125,
        },
        dt_txt: '2019-08-12 09:00:00',
    },
    {
        dt: 1565611200,
        main: {
            temp: 19.13,
            temp_min: 19.13,
            temp_max: 19.13,
            pressure: 1011.6,
            sea_level: 1011.6,
            grnd_level: 1011.24,
            humidity: 69,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 0,
        },
        wind: {
            speed: 5.43,
            deg: 279.362,
        },
        rain: {
            '3h': 0.5,
        },
        dt_txt: '2019-08-12 12:00:00',
    },
    {
        dt: 1565622000,
        main: {
            temp: 18.55,
            temp_min: 18.55,
            temp_max: 18.55,
            pressure: 1011.75,
            sea_level: 1011.75,
            grnd_level: 1011.29,
            humidity: 70,
            temp_kf: 0,
        },
        weather: [
            {
                id: 801,
                main: 'Clouds',
                description: 'few clouds',
                icon: '02d',
            },
        ],
        clouds: {
            all: 12,
        },
        wind: {
            speed: 2.45,
            deg: 283.116,
        },
        dt_txt: '2019-08-12 15:00:00',
    },
    {
        dt: 1565632800,
        main: {
            temp: 16.25,
            temp_min: 16.25,
            temp_max: 16.25,
            pressure: 1012.45,
            sea_level: 1012.45,
            grnd_level: 1011.58,
            humidity: 79,
            temp_kf: 0,
        },
        weather: [
            {
                id: 801,
                main: 'Clouds',
                description: 'few clouds',
                icon: '02d',
            },
        ],
        clouds: {
            all: 21,
        },
        wind: {
            speed: 1.48,
            deg: 160.109,
        },
        dt_txt: '2019-08-12 18:00:00',
    },
    {
        dt: 1565643600,
        main: {
            temp: 15.33,
            temp_min: 15.33,
            temp_max: 15.33,
            pressure: 1012.52,
            sea_level: 1012.52,
            grnd_level: 1011.58,
            humidity: 85,
            temp_kf: 0,
        },
        weather: [
            {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
            },
        ],
        clouds: {
            all: 78,
        },
        wind: {
            speed: 3.07,
            deg: 216.277,
        },
        dt_txt: '2019-08-12 21:00:00',
    },
    {
        dt: 1565654400,
        main: {
            temp: 14.45,
            temp_min: 14.45,
            temp_max: 14.45,
            pressure: 1011.38,
            sea_level: 1011.38,
            grnd_level: 1010.74,
            humidity: 87,
            temp_kf: 0,
        },
        weather: [
            {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
            },
        ],
        clouds: {
            all: 54,
        },
        wind: {
            speed: 3.2,
            deg: 169.375,
        },
        dt_txt: '2019-08-13 00:00:00',
    },
    {
        dt: 1565665200,
        main: {
            temp: 15.55,
            temp_min: 15.55,
            temp_max: 15.55,
            pressure: 1009.8,
            sea_level: 1009.8,
            grnd_level: 1009.17,
            humidity: 82,
            temp_kf: 0,
        },
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
            },
        ],
        clouds: {
            all: 88,
        },
        wind: {
            speed: 3.32,
            deg: 146.75,
        },
        dt_txt: '2019-08-13 03:00:00',
    },
    {
        dt: 1565676000,
        main: {
            temp: 16.11,
            temp_min: 16.11,
            temp_max: 16.11,
            pressure: 1007.32,
            sea_level: 1007.32,
            grnd_level: 1006.54,
            humidity: 82,
            temp_kf: 0,
        },
        weather: [
            {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
            },
        ],
        clouds: {
            all: 94,
        },
        wind: {
            speed: 5.37,
            deg: 133.4,
        },
        rain: {
            '3h': 0.188,
        },
        dt_txt: '2019-08-13 06:00:00',
    },
];
