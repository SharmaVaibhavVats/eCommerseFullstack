import UserService from "../service/UserService";

class UserController {
    userService: UserService;
    constructor() {
        this.userService = new UserService();
    }

    async getUser(ctx) {
        const name = ctx.request.query?.name;
        ctx.body = "Abhishek Sharma";
    }

    async getUsers(ctx): Promise<Array<User>> {
        return await this.userService.getUsers();
    }

    async createUser(user: User): Promise<User> {
        return await this.userService.createUser(user);
    }
}

export default UserController;