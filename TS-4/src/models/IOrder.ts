import { Product } from "./Product";
import { OrderState } from "./OrderState";

export interface IOrder {
    getTotalPrice(): number;
    set state(state: OrderState);
}