import MYSQL_DB from "../config/databases";

class CollegeModel {
  async getColleges(): Promise<Array<College>> {
    return await MYSQL_DB.getall(`select * from college`);
  }
  async getCollegeById(id: number): Promise<College> {
    return await MYSQL_DB.getrow(`select * from college where id = ?`, [id]);
  }
  async createCollege(college: College): Promise<number> {
    let values = [
      college.clg_name,
      college.clg_code,
      college.clg_city,
      college.clg_contact,
    ];

    console.log("college:  ", college);

    const collegeId = await MYSQL_DB.insert(
      `insert into college(clg_name,clg_code, clg_city, clg_contact) values(?,?,?,?)`,
      values
    );

    return collegeId;
  }
  async updateCollege(collegeUpdate: CollegeUpdate) {
    await MYSQL_DB.update(`update college set clg_name=? where id=?`, [
      collegeUpdate.name,
      collegeUpdate.id,
    ]);
  }
  async deleteCollege(collegeDelete: CollegeDelete) {
    await MYSQL_DB.delete(`delete * from college where id=?`);
  }
}

export default CollegeModel;
