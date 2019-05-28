import axios from 'axios';
const singleton = Symbol();
const singletonEnforcer = Symbol();

export default class TokenService {
    private _type: string;
    private accessToken: string;

    public constructor(enforcer: symbol) {
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }

        this._type = 'TokenService';
    }

    public static get instance(): TokenService {
        if (!this[singleton]) {
            this[singleton] = new TokenService(singletonEnforcer);
        }

        return this[singleton];
    }

    public obtainToken = async (key: string, secret: string): Promise<string> => {
        const url = `https://www.arcgis.com/sharing/oauth2/token?client_id=${key}&grant_type=client_credentials&client_secret=${secret}&f=pjson`;
        try {
            const response = await axios.get(url);
            this.accessToken = response.data.access_token;
            return this.accessToken;
        } catch (ex) {
            console.log(ex);
            return null;
        }
    };

    public getToken = (): string => {
        return this.accessToken;
    };

    public get type(): string {
        return this._type;
    }

    public set type(value: string) {
        this._type = value;
    }
}
