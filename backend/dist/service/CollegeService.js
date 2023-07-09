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
const CollegeModel_1 = require("../model/CollegeModel");
class CollegeService {
    constructor() {
        this.collegeModel = new CollegeModel_1.default();
    }
    getColleges() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collegeModel.getColleges();
        });
    }
    createCollege(college) {
        return __awaiter(this, void 0, void 0, function* () {
            let collegeId = yield this.collegeModel.createCollege(college);
            console.log("college created id " + collegeId);
            return yield this.collegeModel.getCollegeById(collegeId);
        });
    }
    updateCollege(collegeUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collegeModel.updateCollege(collegeUpdate);
        });
    }
    deleteCollege(collegeDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collegeModel.deleteCollege(collegeDelete);
        });
    }
}
exports.default = CollegeService;
