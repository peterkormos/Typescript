export class Product {
    constructor(private _id: string, private _name: string, private _price: number, private _description?: string) {
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get description() {
        return this._description;
    }
}
