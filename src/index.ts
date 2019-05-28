import * as Koa from 'koa';
import * as Static from 'koa-static';
import * as Router from 'koa-router';
import * as Logger from 'koa-logger';
import * as BodyParser from 'koa-BodyParser';
import { getCurrentByCoordinates, getForecastByCoordinates } from './api/owmApi';
import { suggest, getCoordinates } from './api/arcgisApi';
const app = new Koa();

const router = new Router();
router.post(
    '/api/currentByCoordinates',
    async (ctx): Promise<void> => {
        console.log(ctx.request.body);
        const { lattitude, longitude } = ctx.request.body;
        const forecast = await getCurrentByCoordinates(lattitude, longitude);
        ctx.response.body = forecast;
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
        const forecast = await suggest(text);
        ctx.response.body = forecast;
    },
);
router.post(
    '/api/getCoordinates',
    async (ctx): Promise<void> => {
        console.log(ctx.request.body);
        const { magicKey } = ctx.request.body;
        const forecast = await getCoordinates(magicKey);
        ctx.response.body = forecast;
    },
);

app.use(Logger());
app.use(BodyParser());
app.use(Static('./build'));
app.use(router.routes());

// if (!module.parent) {
app.listen(3000);
//}

module.exports = app;
