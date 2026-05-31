import { EntityId, IEntity } from "../models/Entity";
import IEvent from "../models/IEvent";
import IUser from "../models/IUser";

// 2. Résztvevők Kezelése: Készíts rendszert a résztvevők 
export default interface IUserService {
    // felvételéhez és nyilvántartásához, 
    // beleértve az rendezvényekhezekhez való hozzáadásukat és eltávolításukat.
    createUser(name: string): IUser;
    registerUser(user: IUser, event: IEvent): IEvent;
    removeUser(user: IUser, event: IEvent): IEvent;
}