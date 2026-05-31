import { IEntity } from "./Entity";


export default interface IUser extends IEntity {
    getName(): string;
}
