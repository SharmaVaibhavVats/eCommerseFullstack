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
class CollegeModel {
    getColleges() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield databases_1.default.getall(`select * from college`);
        });
    }
    getCollegeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield databases_1.default.getrow(`select * from college where id = ?`, [id]);
        });
    }
    createCollege(college) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = [
                college.clg_name,
                college.clg_code,
                college.clg_city,
                college.clg_contact,
            ];
            console.log("college:  ", college);
            const collegeId = yield databases_1.default.insert(`insert into college(clg_name,clg_code, clg_city, clg_contact) values(?,?,?,?)`, values);
            return collegeId;
        });
    }
    updateCollege(collegeUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield databases_1.default.update(`update college set clg_name=? where id=?`, [
                collegeUpdate.name,
                collegeUpdate.id,
            ]);
        });
    }
    deleteCollege(collegeDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            yield databases_1.default.delete(`delete * from college where id=?`);
        });
    }
}
exports.default = CollegeModel;
