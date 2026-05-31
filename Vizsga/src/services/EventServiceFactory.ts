import { EventService } from "./EventService";
import IEventService from "./IEventService";

export class EventServiceFactory {
    static createEventService(): IEventService {
        return new EventService();
    }
}