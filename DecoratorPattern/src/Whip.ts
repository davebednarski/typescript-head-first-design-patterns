import Beverage from "./Beverage";

export default class Whip extends Beverage {
    public beverage: Beverage;

    constructor(b:Beverage) {
        super();
        this.beverage = b;
    }

    cost(): number {
        return this.beverage.cost() + 0.10;
    }
}