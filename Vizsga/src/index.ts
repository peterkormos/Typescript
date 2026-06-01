import IUserService from "./services/IUserService";
import IEventService from "./services/IEventService";
import { UserServiceFactory } from "./services/UserServiceFactory";
import { EventServiceFactory } from "./services/EventServiceFactory";
import { EventType } from "./models/Event";
import IUser from "./models/IUser";
import IEvent from "./models/IEvent";

const us: IUserService = UserServiceFactory.createUserService();
const es: IEventService = EventServiceFactory.createEventService();

const teacher = us.createUser("Balint");

const ujvilagStudentPeter: IUser = us.createUser("Péter");
const ujvilagStudentCsaba: IUser = us.createUser("Csaba");
const ujvilagStudentMartin: IUser = us.createUser("Martin");
const ujvilagStudentNandi: IUser = us.createUser("Nandi");
const ujvilagStudentPatrik: IUser = us.createUser("Patrik");
const ujvilagStudentMark: IUser = us.createUser("Márk");

console.log(`Legelőször az események száma: ${es.getEvents().length}`);

let typescriptCourse = es.createEvent(EventType.Birthday, "Születésnap", "Otthon");

es.updateEvent(typescriptCourse.getId(), EventType.Course, "Typescript tanfolyam", "Online")
    .then(updatedEvent => {
        typescriptCourse = updatedEvent;
    })
    .then(() => {
        us.registerUser(teacher, typescriptCourse);
    })
    .then(() => {
        es.addParticipant(typescriptCourse.getId(), ujvilagStudentPeter);
        es.addParticipant(typescriptCourse.getId(), ujvilagStudentCsaba);
        es.addParticipant(typescriptCourse.getId(), ujvilagStudentMartin);
        es.addParticipant(typescriptCourse.getId(), ujvilagStudentMark);
        es.addParticipant(typescriptCourse.getId(), ujvilagStudentNandi);
        es.addParticipant(typescriptCourse.getId(), ujvilagStudentPatrik);

        es.removeParticipant(typescriptCourse.getId(), ujvilagStudentMark.getId());

        console.log(`Egy esemény regisztrációja után az események száma (1 db): ${es.getEvents().length}`);
    }).then(() => {
        let markSzulinap = es.createEvent(EventType.Birthday, "Márk születésnap", "Otthon");
        es.addParticipant(markSzulinap.getId(), ujvilagStudentMark);

        let csabaSzulinap = es.createEvent(EventType.Birthday, "Csaba születésnap", "Otthon");
        us.registerUser(ujvilagStudentCsaba, csabaSzulinap);

        console.log(`Születésnapok regisztrációja után az események száma (3 db): ${es.getEvents().length}`);
        console.log(`Csak születésnapok események száma (2 db): ${es.getEvents(EventType.Birthday).length}`);
    })
    .then(() => {
        es.getParticipants(typescriptCourse.getId())
            .then(participants => {
                console.log(`Typescript tanfolyam esemény résztvevők (6 db): ${participants.map(p => p.getName()).join(", ")}`);
            })
            ;
    }).then(() => {
        es.getEventsByType().then(map => {

            console.log(`Eseményenkénti bontás:`);
            map.forEach((events, type) => {
                console.log(`  ${EventType[type]}: ${events.map(e => e.getName() + ' - ' + e.getPlace()).join(", ")}`);
            });
        });
    })
    .then(() => {
        es.deleteEvent(typescriptCourse.getId()).then(deletedEvent => {
            typescriptCourse = deletedEvent;
            us.removeUser(teacher, typescriptCourse);
            console.log(`Typescript tanfolyam esemény törlés után az események száma (2 db): ${es.getEvents().length}`);
        });
    })
    ;

