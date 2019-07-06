export interface Coords {
    latitude: number;
    longitude: number;
}

export interface Location {
    coordinates: Coords;
    country: string;
    city: string;
}

export interface State {
    location: Location;
}
