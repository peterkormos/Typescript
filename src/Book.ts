export class Book {
    constructor(private _userId: string, private _title: string, private _author: string, private _price: number) {
    }

    get id() {
        return this._userId;
    }
}
