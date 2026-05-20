import { Product } from "./Product";
import { IInventory } from "./IInventory";

export class Inventory implements IInventory {
    private products: Product[] = [];
    
    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(id: string): void {
        this.products = this.products.filter(product => product.id !== id);
    }

    findProductById(id: string): Product | undefined {
        return this.products.find(product => product.id === id);
    }

    listAllProducts(): Product[] {
        return this.products;
    }
}