import Beverage from "./Beverage";

export default class Soy extends Beverage {
    public beverage: Beverage;

    constructor(b: Beverage) {
        super();
        this.beverage = b;
    }

    cost(): number {
        return this.beverage.cost() + 0.50;
    }
}