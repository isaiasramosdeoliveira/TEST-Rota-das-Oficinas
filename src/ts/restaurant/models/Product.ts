import { IProduct } from "../../../interfaces/interfaces";

class Product {
    products: IProduct[] = [];
    value = 0;
    register(dice: IProduct) {
        return this.products.push(dice);
    }
    total(){
        return this.value;
    }
}

export default new Product;