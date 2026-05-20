import { Product } from "./Product";

export interface IInventory {
    addProduct(product: Product): void;
    removeProduct(id: string): void;
    findProductById(id: string): Product | undefined;
    listAllProducts(): Product[];
}