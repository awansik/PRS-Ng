import { Vendor } from '../vendor/vendor.class';

export class Product {

    id: number;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;
    vendor: Vendor;

    constructor() {
        this.id = 0;
        this.price = 0;
    }
}