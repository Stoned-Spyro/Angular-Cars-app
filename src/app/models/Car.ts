export class Car {
    id: number;
    name: string;
    model: string;
    price: number;

    constructor(name: string, model: string, price: number) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
}