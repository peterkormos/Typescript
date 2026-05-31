import IUserService from "./IUserService";
import { UserService } from "./UserService";

export class UserServiceFactory {
    static createUserService(): IUserService {
        return new UserService();
    }
}