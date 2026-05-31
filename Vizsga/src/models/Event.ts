import { EntityId } from "./Entity";
import IEvent from "./IEvent";
import IUser from "./IUser";

export enum EventType {
    Birthday,
    Family,
    Concert,
    Festival,
    Course,
    AnythingElse
}

class Event implements IEvent {
    // A rendezvény entitás minimum elvárásai: 
    // Név, hely, idő, résztvevők listája, a rendezvény tematikája/típusa.
    constructor(private readonly id: EntityId, 
        private name: string,
        private place: string,
        private time: Date,
        private participants: IUser[],
        private type: EventType
    ) {}
    getId(): EntityId {
        return this.id;
    }
    getType() {
        return this.type;
    }
    getName(): string {
        return this.name;
    }
    getPlace(): string {
        return this.place;
    }
    getTime(): Date {
        return this.time;
    }
    getParticipants(): IUser[] {
        return this.participants;
    }
    
    setType(type: EventType): void {
        this.type = type;
    }
    setName(name: string): void {
        this.name = name;
    }
    setParticipants(participants: IUser[]): void {
        this.participants = participants;
    }
    setPlace(place: string): void {
        this.place = place;
    }
    setTime(time: Date): void {
        this.time = time;
    }

    addParticipant(user: IUser): void {
        this.participants.push(user);
    }
}

export class EventFactory {
    private static instance: EventFactory;

    private constructor() {}

    public static getInstance(): EventFactory {
        if (!EventFactory.instance) {
            EventFactory.instance = new EventFactory();
        }
        return EventFactory.instance;
    }

    public createEvent(id: EntityId, name: string, place: string, 
        time: Date, participants: IUser[], type: EventType): IEvent {
        return new Event(id, name, place, time, participants, type);
    }
}

export default {EventFactory, EventType};