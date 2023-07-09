import CollegeModel from "../model/CollegeModel";

class CollegeService {
  collegeModel: CollegeModel;

  constructor() {
    this.collegeModel = new CollegeModel();
  }

  async getColleges(): Promise<Array<College>> {
    return await this.collegeModel.getColleges();
  }

  async createCollege(college: College): Promise<College> {
    let collegeId = await this.collegeModel.createCollege(college);
    console.log("college created id " + collegeId);
    return await this.collegeModel.getCollegeById(collegeId);
  }
  async updateCollege(collegeUpdate: CollegeUpdate) {
    await this.collegeModel.updateCollege(collegeUpdate);
  }
  async deleteCollege(collegeDelete: CollegeDelete) {
    await this.collegeModel.deleteCollege(collegeDelete);
  }
}

export default CollegeService;
