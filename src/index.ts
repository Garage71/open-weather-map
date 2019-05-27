import Koa = require('koa');
import serve = require('koa-static');
const app = new Koa();

app.use(
    async (ctx): Promise<void> => {
        ctx.body = 'Hello World';
    },
);

if (!module.parent) {
    app.listen(3000);
}

module.exports = app;
