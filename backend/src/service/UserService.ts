import UserModel from "../model/UserModel";

class UserService {
    userModel: UserModel;

    constructor() {
       this.userModel = new UserModel();
    }

    async getUsers(): Promise<Array<User>> {
        return await this.userModel.getUsers();
    }

    async createUser(user: User): Promise<User> {
        let userId = await this.userModel.createUser(user);
        console.log("user created id " + userId);
        return await this.userModel.getUserById(userId); 
    }
}


export default UserService;