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
const UserService_1 = require("../service/UserService");
class UserController {
    constructor() {
        this.userService = new UserService_1.default();
    }
    getUser(ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const name = (_a = ctx.request.query) === null || _a === void 0 ? void 0 : _a.name;
            ctx.body = "Abhishek Sharma";
        });
    }
    getUsers(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.getUsers();
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.createUser(user);
        });
    }
}
exports.default = UserController;
