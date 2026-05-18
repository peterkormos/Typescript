export class User {
    constructor(_userId, _name, _email) {
        this._userId = _userId;
        this._name = _name;
        this._email = _email;
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
    borrowBook(library, bookId) {
        const book = library.findBookById(bookId);
        if (book) {
            library.removeBook(bookId);
        }
    }
}
