import * as Koa from 'koa';
import * as Static from 'koa-static';
import * as Router from 'koa-router';
import * as Logger from 'koa-logger';
import * as BodyParser from 'koa-bodyparser';
import { getCurrentByCoordinates, getForecastByCoordinates } from './api/owmApi';
import { suggest, getCoordinates } from './api/arcgisApi';
import { getCoordsByIp } from './api/extremeIpApi';

const port = process.env.PORT || 3000;
const app = new Koa();

const router = new Router();
router.post(
    '/api/currentByCoordinates',
    async (ctx): Promise<void> => {
        console.log(ctx.request.body);
        const { latitude, longitude } = ctx.request.body;
        const weather = await getCurrentByCoordinates(latitude, longitude);
        ctx.response.body = weather;
    },
);
router.post(
    '/api/forecastByCoordinates',
    async (ctx): Promise<void> => {
        console.log(ctx.request.body);
        const { latitude, longitude } = ctx.request.body;
        const forecast = await getForecastByCoordinates(latitude, longitude);
        ctx.response.body = forecast;
    },
);
router.post(
    '/api/suggest',
    async (ctx): Promise<void> => {
        console.log(ctx.request.body);
        const { text } = ctx.request.body;
        const suggestions = await suggest(text);
        ctx.response.body = suggestions;
    },
);
router.post(
    '/api/getCoordinates',
    async (ctx): Promise<void> => {
        console.log(ctx.request.body);
        const { magicKey } = ctx.request.body;
        const coordinates = await getCoordinates(magicKey);
        ctx.response.body = coordinates;
    },
);
router.post(
    '/api/coordsbyip',
    async (ctx): Promise<void> => {
        console.log(ctx.request.body);
        const { ip } = ctx.request.body;
        const coordinates = await getCoordsByIp(ip);
        ctx.response.body = coordinates;
    },
);

app.use(Logger());
app.use(BodyParser());
app.use(Static('./build'));
app.use(router.routes());

app.listen(port);

module.exports = app;
