"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const logger = require("koa-logger");
const json = require("koa-json");
const views = require("koa-views");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const dotenv = require("dotenv");
dotenv.config();
const routes_1 = require("./routes");
const app = new Koa();
// Middlewares
app.use(views('src/views', { map: { html: 'nunjucks' } }));
app.use(json());
app.use(logger());
// TODO: add bodyParser limits
app.use(bodyParser());
// TODO: add tracing
// TODO: setup request timeout 
app.use(cors());
// Routes
app.use(routes_1.default.routes()).use(routes_1.default.allowedMethods());
const PORT = process.env.NODE_PORT || 3300;
app.listen(3300, () => {
    console.log(`Koa Server listening on port: ${PORT}`);
});
