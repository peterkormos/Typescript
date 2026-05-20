import { Inventory } from "./models/Inventory";
import { Product } from "./models/Product";
import { Order } from "./models/Order";
import { IOrder } from "./models/IOrder";
import { OrderState } from "./models/OrderState";
import { User } from "./models/User";
import { IUser } from "./models/IUser";

const user : IUser = new User("user1", "Felhasználó József", "jozsi.felh@email.hu");

const inventory : Inventory = new Inventory();
inventory.addProduct(new Product("productId1", "Termék 1", 1000));
inventory.addProduct(new Product("productId2", "Termék 2", 2000));

const order : IOrder = user.placeOrder(inventory.listAllProducts());
console.log("Rendelés leadva:", order); 
console.log("Rendelés összege:", order.getTotalPrice());

// Rendelés állapotának frissítése

order.state = OrderState.Processing;
console.log("Rendelés állapota:", order.state);

order.state = OrderState.Delivered;
console.log("Rendelés állapota:", order.state);


