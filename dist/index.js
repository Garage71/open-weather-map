"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Static = require("koa-static");
const Router = require("koa-router");
const Logger = require("koa-logger");
const BodyParser = require("koa-BodyParser");
const app = new Koa();
const api_1 = require("./api/api");
/*
app.use(
    async (ctx): Promise<void> => {
        ctx.body = 'Hello World';
    },
);
*/
const router = new Router();
router.post('/api/currentByCoordinates', (ctx) => __awaiter(this, void 0, void 0, function* () {
    console.log(ctx.request.body);
    const { lattitude, longitude } = ctx.request.body;
    const forecast = yield api_1.getCurrentByCoordinates(lattitude, longitude);
    ctx.response.body = forecast;
}));
router.post('/api/forecastByCoordinates', (ctx) => __awaiter(this, void 0, void 0, function* () {
    console.log(ctx.request.body);
    const { lattitude, longitude } = ctx.request.body;
    const forecast = yield api_1.getForecastByCoordinates(lattitude, longitude);
    ctx.response.body = forecast;
}));
app.use(Logger());
app.use(BodyParser());
app.use(Static('./build'));
app.use(router.routes());
// if (!module.parent) {
app.listen(3000);
//}
module.exports = app;
//# sourceMappingURL=index.js.map