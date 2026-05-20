import { Product } from "./Product";
import { OrderState } from "./OrderState";
import { IOrder } from "./IOrder";

export class Order implements IOrder {
    constructor(private _orderId: string, private _products: Product[], private _orderState: OrderState) {
    }

    get orderId() {
        return this._orderId;
    }

    get products() {
        return this._products;
    }

    get state() {
        return this._orderState;
    }

    set state(newState: OrderState) {
        this._orderState = newState;
    }

    getTotalPrice(): number {
        return this._products.reduce((total, product) => total + product.price, 0);
    }
}