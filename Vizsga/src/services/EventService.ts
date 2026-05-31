import { EntityId, getNewEntityId } from "../models/Entity";
import { EventFactory, EventType } from "../models/Event";
import IEvent from "../models/IEvent";
import IUser from "../models/IUser";
import IEventService from "./IEventService";


function Log(target: any, propertyKey: string,
  descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`----- ${propertyKey} hívása`);
        const result = originalMethod.apply(this, args);
        return result;
    };
}

export class EventService implements IEventService {
    private readonly eventFactory = EventFactory.getInstance();
    private readonly events: Map<EntityId, IEvent> = new Map();

    @Log
    createEvent(type: EventType, name: string, place: string, time: Date = new Date(), participants: IUser[] = []): IEvent {
        const event = this.eventFactory.createEvent(getNewEntityId(), name, place, time, participants, type);
        this.events.set(event.getId(), event);
        
        return event;
    }

    private getMandatoryEvent(id: EntityId): IEvent {
        const event = this.events.get(id);
        
        if (!event) {
            throw new Error("Event not found.");
        }

        return event;
    }

    @Log
    updateEvent(eventId: EntityId, type: EventType, name: string, place: string): IEvent {
        const event = this.getMandatoryEvent(eventId);

        event.setType(type);
        event.setName(name);
        event.setPlace(place);

        return event;
    }

    @Log
    deleteEvent(eventId: EntityId): IEvent {
        const event = this.getMandatoryEvent(eventId);
        
        this.events.delete(eventId);
        
        return event;
    }

    @Log
    getEvents(type?: EventType): IEvent[] {
        const returned = Array.from(this.events.values());

        if(type === undefined) {
            return returned;
        }
        return returned.filter(event => event.getType() === type);
    }

    @Log
    getParticipants(eventId: EntityId): IUser[] {
        const event = this.getMandatoryEvent(eventId);

        return event.getParticipants();
    }
    
    @Log
    addParticipant(eventId: EntityId, user: IUser): IEvent {
        const event = this.getMandatoryEvent(eventId);

        event.addParticipant(user);
        return event;
    }
    
    @Log
    removeParticipant(eventId: EntityId, userId: EntityId): IEvent {
        const event = this.getMandatoryEvent(eventId);

        event.setParticipants(
        event.getParticipants().filter(participant => participant.getId() !== userId));

        return event;
    }
    
    @Log
    getEventsByType(): Map<EventType, IEvent[]> {
        const eventsByType = new Map<EventType, IEvent[]>();

        this.events.forEach(
            (event, eventId) => {
                const type = event.getType();
                let events = eventsByType.get(type);

                if (!events) {
                    events = [];
                    eventsByType.set(type, events);
                }
                events.push(event);
            }
        );

        return eventsByType;
    }
}
