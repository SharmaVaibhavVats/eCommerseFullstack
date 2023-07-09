import MYSQL_DB from "../config/databases";

class UserModel {
  async getUsers(): Promise<Array<User>> {
    return await MYSQL_DB.getall(`select * from user`);
  }

  async getUserById(id: number): Promise<User> {
    return await MYSQL_DB.getrow(`select * from user where id = ?`, [id]);
  }

  async createUser(user: User): Promise<number> {
    let values = [user.name, user.email, user.phone];
    const userId = await MYSQL_DB.insert(
      `insert into user(name, email, phone) values(?,?,?)`,
      values
    );

    return userId;
  }
}

export default UserModel;
