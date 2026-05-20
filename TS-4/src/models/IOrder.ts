import { Product } from "./Product";
import { OrderState } from "./OrderState";

export interface IOrder {
    getTotalPrice(): number;
}