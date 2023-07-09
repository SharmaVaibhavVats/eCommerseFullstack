"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const UserController_1 = require("../controller/UserController");
const router = new Router();
router.post("/", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("create user started");
    const userController = new UserController_1.default();
    let user = yield userController.createUser(ctx.request.body);
    ctx.body = user;
}));
router.get("/", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userController = new UserController_1.default();
    // await userController.getUser(ctx);
    try {
        let users = yield userController.getUsers(ctx);
        console.log("here users " + JSON.stringify(users));
        ctx.body = users;
    }
    catch (err) {
        console.log("Error in getusers", err);
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            code: ctx.status,
            msg: "some error occured!",
        };
    }
}));
// Hello world
// router.get("/getInfo", async (ctx, next) => {
//   // const data = <HelloWorld>ctx.request.body;
//   // ctx.body = { completeName: data.name };
//   const name = ctx.request.query?.name;
//   await ctx.render('./index', {
//     name: name
//   });
// });
//module.exports = router;
exports.default = router;
