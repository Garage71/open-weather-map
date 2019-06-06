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
const BodyParser = require("koa-bodyparser");
const owmApi_1 = require("./api/owmApi");
const arcgisApi_1 = require("./api/arcgisApi");
const port = process.env.PORT || 3000;
const app = new Koa();
const router = new Router();
router.post('/api/currentByCoordinates', (ctx) => __awaiter(this, void 0, void 0, function* () {
    console.log(ctx.request.body);
    const { lattitude, longitude } = ctx.request.body;
    const weather = yield owmApi_1.getCurrentByCoordinates(lattitude, longitude);
    ctx.response.body = weather;
}));
router.post('/api/forecastByCoordinates', (ctx) => __awaiter(this, void 0, void 0, function* () {
    console.log(ctx.request.body);
    const { lattitude, longitude } = ctx.request.body;
    const forecast = yield owmApi_1.getForecastByCoordinates(lattitude, longitude);
    ctx.response.body = forecast;
}));
router.post('/api/suggest', (ctx) => __awaiter(this, void 0, void 0, function* () {
    console.log(ctx.request.body);
    const { text } = ctx.request.body;
    const suggestions = yield arcgisApi_1.suggest(text);
    ctx.response.body = suggestions;
}));
router.post('/api/getCoordinates', (ctx) => __awaiter(this, void 0, void 0, function* () {
    console.log(ctx.request.body);
    const { magicKey } = ctx.request.body;
    const coordinates = yield arcgisApi_1.getCoordinates(magicKey);
    ctx.response.body = coordinates;
}));
app.use(Logger());
app.use(BodyParser());
app.use(Static('./build'));
app.use(router.routes());
// if (!module.parent) {
app.listen(port);
//}
module.exports = app;
//# sourceMappingURL=index.js.map