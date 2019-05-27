import * as Koa from 'koa';
import * as Static from 'koa-static';
import * as Router from 'koa-router';
import * as Logger from 'koa-logger';
import * as BodyParser from 'koa-BodyParser';
const app = new Koa();
import { getCurrentByCoordinates, getForecastByCoordinates } from './api/api';

/*
app.use(
    async (ctx): Promise<void> => {
        ctx.body = 'Hello World';
    },
);
*/
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

app.use(Logger());
app.use(BodyParser());
app.use(Static('./build'));
app.use(router.routes());

// if (!module.parent) {
app.listen(3000);
//}

module.exports = app;
