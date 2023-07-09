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
const UserModel_1 = require("../model/UserModel");
class UserService {
    constructor() {
        this.userModel = new UserModel_1.default();
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.getUsers();
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = yield this.userModel.createUser(user);
            console.log("user created id " + userId);
            return yield this.userModel.getUserById(userId);
        });
    }
}
exports.default = UserService;
