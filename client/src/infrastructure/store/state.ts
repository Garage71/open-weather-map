export interface Coords {
    latitude: number;
    longitude: number;
}

export interface Location {
    coordinates?: Coords;
    country: string;
    city: string;
}

export interface State {
    location: Location;
    currentWeather: CurrentWeather;
}

export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface CurrentWeather {
    coord: {
        lon: number;
        lat: number;
    };
    clouds: {
        all: number;
    };
    main: {
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
        speed: number;
        deg: number;
    };
    rain?: {
        '1h': number;
        '3h': number;
    };
    snow?: {
        '1h': number;
        '3h': number;
    };
    dt: number;
    name: string;
}
