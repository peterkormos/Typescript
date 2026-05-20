import { Product } from "./Product";
import { Order } from "./Order";    

export interface IUser {
    placeOrder(products: Product[]): Order;
}