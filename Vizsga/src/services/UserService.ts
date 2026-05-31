import { EntityId, getNewEntityId, IEntity } from "../models/Entity";
import IUser from "../models/IUser";
import IUserService from "./IUserService";
import IEvent from "../models/IEvent";
import UserFactory from "../models/User";

export class UserService implements IUserService {
    private readonly userFactory = UserFactory.getInstance();

    createUser(name: string) : IUser{
        return this.userFactory.createUser(getNewEntityId(), name);
    }

    registerUser(user: IUser, event: IEvent ) : IEvent{
       event.addParticipant(user);
       return event;
    }

    removeUser(user: IUser, event: IEvent): IEvent {
        event.setParticipants(
            event.getParticipants().filter(eventUser => eventUser.getId() !== user.getId()));
        return event;
    }
}