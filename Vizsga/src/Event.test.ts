import IUserService from "./services/IUserService";
import IEventService from "./services/IEventService";
import { UserServiceFactory } from "./services/UserServiceFactory";
import { EventServiceFactory } from "./services/EventServiceFactory";
import { EventType } from "./models/Event";
import IUser from "./models/IUser";
import IEvent from "./models/IEvent";

describe('Event', () => {
  it('Event create', () => {

let us: IUserService = UserServiceFactory.createUserService();
let es: IEventService = EventServiceFactory.createEventService();

let teacher = us.createUser("Balint");

expect(es.getEvents().length).toBe(0);
let typescriptCourse = es.createEvent(EventType.Birthday, "Születésnap", "Otthon");
expect(es.getEvents().length).toBe(1);

  });
});