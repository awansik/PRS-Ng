import { Product } from '../product/product.class';
import { Request } from '../request/request.class';

export class Reqline {

    id: number;
    productId: number;
    product: Product;
    requestId: number;
    request: Request;
    quantity: number;
    active: boolean;

    constructor() {
        this.id = 0;
        this.active = true;
        this.quantity = 1;
    }
}