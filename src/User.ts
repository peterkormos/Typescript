import { ILibrary } from './ILibrary';

export class User {
    constructor(private _userId: string, private _name: string, private _email: string) {
    }
    get id() {
        return this._userId;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    borrowBook(library: ILibrary, bookId: string) {
        const book = library.findBookById(bookId);
        if (book) {
            library.removeBook(bookId);
        }
    }
}
