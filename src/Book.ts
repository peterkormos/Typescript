export class Book {
    constructor(_userId, _title, _author, _price) {
        this._userId = _userId;
        this._title = _title;
        this._author = _author;
        this._price = _price;
    }
    get id() {
        return this._userId;
    }
}
