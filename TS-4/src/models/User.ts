import { Product } from "./Product";
import { Order } from "./Order";
import { OrderState } from "./OrderState";
import {IUser} from "./IUser";

export class User implements IUser {
    constructor(private _userId: string, private _name: string, private _email: string) {
    }

    get userId() {
        return this._userId;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    placeOrder(products: Product[]): Order {
        const orderId = `order-${Date.now()}`;
        return new Order(orderId, products, OrderState.New);
    }
}