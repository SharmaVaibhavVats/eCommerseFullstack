import CollegeService from "../service/CollegeService";

class CollegeController {
  collegeService: CollegeService;
  constructor() {
    this.collegeService = new CollegeService();
  }
  async getColleges(ctx): Promise<Array<College>> {
    return await this.collegeService.getColleges();
  }

  async createCollege(college: College): Promise<College> {
    return await this.collegeService.createCollege(college);
  }

  async updateCollege(collegeUpdate: CollegeUpdate) {
    await this.collegeService.updateCollege(collegeUpdate);
  }

  async deleteCollege(collegeDelete: CollegeDelete) {
    await this.deleteService.deleteCollege(collegeDelete);
  }
}

export default CollegeController;
