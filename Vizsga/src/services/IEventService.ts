import {EventType } from "../models/Event";
import IEvent from "../models/IEvent";
import { EntityId } from "../models/Entity";
import IUser from "../models/IUser";

export default interface IEventService {
    // 1. Rendezvény Kezelés: Implementálj osztályokat és interface-eket 
    // az rendezvények kezeléséhez, 
    // beleértve azok létrehozását, szerkesztését, és törlését.
    createEvent(type: EventType, name: string, place: string): IEvent;
    updateEvent(eventId: EntityId, type: EventType, name: string, place: string): Promise<IEvent>;
    deleteEvent(eventId: EntityId): Promise<IEvent>;

    // ... nyújtson lehetőséget az rendezvények és résztvevők adatainak lekérdezésére.
    getEvents(type?: EventType): IEvent[];
    getParticipants(eventId: EntityId): Promise<IUser[]>;

    // 2. Résztvevők Kezelése: Készíts rendszert a résztvevők 
    // felvételéhez és nyilvántartásához, 
    // beleértve az rendezvényekhezekhez való hozzáadásukat és eltávolításukat.
    addParticipant(eventId: EntityId, user: IUser): Promise<IEvent>;
    removeParticipant(eventId: EntityId, userId: EntityId): Promise<IEvent>;

    //Tematikus Csoportosítás: Implementálj funkcionalitást az rendezvények tematikus 
    // csoportosítására, hogy a felhasználók könnyen megtalálhassák az őket 
    // érdeklő rendezvényeket.
    getEventsByType(): Promise<Map<EventType, IEvent[]>>;
}