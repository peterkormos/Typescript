import { EntityId } from "./Entity";
import IUser from "./IUser";

class User implements IUser {
    constructor(private readonly id: EntityId, private readonly name: string) {}

    getId(): EntityId {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
}

export class UserFactory {
    private static instance: UserFactory;

    private constructor() {}

    public static getInstance(): UserFactory {
        if (!UserFactory.instance) {
            UserFactory.instance = new UserFactory();
        }
        return UserFactory.instance;
    }

    public createUser(id: EntityId, name: string): IUser {
        return new User(id, name);
    }
}

export default UserFactory;