import { EntityId, getNewEntityId } from "../models/Entity";
import { EventFactory, EventType } from "../models/Event";
import IEvent from "../models/IEvent";
import IUser from "../models/IUser";
import IEventService from "./IEventService";

export class EventService implements IEventService {
    private readonly eventFactory = EventFactory.getInstance();
    private readonly events: Map<EntityId, IEvent> = new Map();

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

    updateEvent(eventId: EntityId, type: EventType, name: string, place: string): IEvent {
        const event = this.getMandatoryEvent(eventId);

        event.setType(type);
        event.setName(name);
        event.setPlace(place);

        return event;
    }

    deleteEvent(eventId: EntityId): IEvent {
        const event = this.getMandatoryEvent(eventId);
        
        this.events.delete(eventId);
        
        return event;
    }

    getEvents(type?: EventType): IEvent[] {
        const returned = Array.from(this.events.values());

        if(type === undefined) {
            return returned;
        }
        return returned.filter(event => event.getType() === type);
    }

    getParticipants(eventId: EntityId): IUser[] {
        const event = this.getMandatoryEvent(eventId);

        return event.getParticipants();
    }
    
    addParticipant(eventId: EntityId, user: IUser): IEvent {
        const event = this.getMandatoryEvent(eventId);

        event.addParticipant(user);
        return event;
    }
    
    removeParticipant(eventId: EntityId, userId: EntityId): IEvent {
        const event = this.getMandatoryEvent(eventId);

        event.setParticipants(
        event.getParticipants().filter(participant => participant.getId() !== userId));

        return event;
    }
    
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