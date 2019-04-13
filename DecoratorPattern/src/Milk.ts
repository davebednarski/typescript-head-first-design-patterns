import CondimentDecorator from "./CondimentDecorator";
import Beverage from "./Beverage";

export default class Milk extends CondimentDecorator {
    public beverage: Beverage;

    constructor(b: Beverage) {
        super();
        this.beverage = b;
    }

    cost(): number {
        return this.beverage.cost() + 0.77;
    }
}