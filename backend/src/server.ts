import * as Koa from "koa";

import * as logger from "koa-logger";
import * as json from "koa-json";
import * as koaViews from "koa-views";
import * as nunJucks from "nunjucks";
import * as views from "koa-views";
import * as cors from "@koa/cors";
import bodyParser = require("koa-bodyparser");
import * as dotenv from "dotenv";
dotenv.config();
import router from "./routes";

const app = new Koa();

// Middlewares
app.use(views('src/views', {map: {html: 'nunjucks'}}));
app.use(json());
app.use(logger());

// TODO: add bodyParser limits
app.use(bodyParser());
// TODO: add tracing

// TODO: setup request timeout 

app.use(cors());
// Routes
app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.NODE_PORT || 3300;
app.listen(3300, () => {
  console.log(`Koa Server listening on port: ${PORT}`);
});