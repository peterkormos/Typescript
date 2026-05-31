import { IEntity } from "./Entity";
import { EventType } from "./Event";
import IUser from "./IUser";

export default interface IEvent extends IEntity {
    addParticipant(user: IUser): unknown;
    
    getType(): EventType;
    getName(): string;
    getParticipants(): IUser[];
    getPlace(): string;
    getTime(): Date;

    setType(type: EventType): unknown;
    setName(name: string): unknown;
    setParticipants(participants: IUser[]): void;
    setPlace(place: string): void;
    setTime(time: Date): void;
}
