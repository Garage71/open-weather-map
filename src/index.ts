import * as Koa from 'koa';
import * as Static from 'koa-static';
import * as Router from 'koa-router';
import * as Logger from 'koa-logger';
import * as BodyParser from 'koa-bodyparser';
import { getCurrentByCoordinates, getForecastByCoordinates } from './api/owmApi';
import { suggest, getCoordinates } from './api/arcgisApi';
import { addListener } from 'cluster';

const port = process.env.PORT || 3000;
const app = new Koa();
asd;
const router = new Router();
router.post(
    '/api/currentByCoordinates',
    async (ctx): Promise<void> => {
        console.log(ctx.request.body);
        const { lattitude, longitude } = ctx.request.body;
        const weather = await getCurrentByCoordinates(lattitude, longitude);
        ctx.response.body = weather;
    },
);
router.post(
    '/api/forecastByCoordinates',
    async (ctx): Promise<void> => {
        console.log(ctx.request.body);
        const { lattitude, longitude } = ctx.request.body;
        const forecast = await getForecastByCoordinates(lattitude, longitude);
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

app.use(Logger());
app.use(BodyParser());
app.use(Static('./build'));
app.use(router.routes());

// if (!module.parent) {
app.listen(port);
//}

module.exports = app;
