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
};
