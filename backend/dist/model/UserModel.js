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
const databases_1 = require("../config/databases");
class UserModel {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield databases_1.default.getall(`select * from user`);
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield databases_1.default.getrow(`select * from user where id = ?`, [id]);
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = [user.name, user.email, user.phone];
            const userId = yield databases_1.default.insert(`insert into user(name, email, phone) values(?,?,?)`, values);
            return userId;
        });
    }
}
exports.default = UserModel;
