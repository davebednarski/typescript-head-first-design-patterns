import Duck from "../Duck";
import Squeak from "../QuackBehaviors/Squeak";
import FlyNoWay from "../FlyBehaviors/FlyNoWay";

export default class RubberDuck extends Duck {

    constructor() {
        super();
        this.quackBehavior = new Squeak();
        this.flyBehavior = new FlyNoWay();
    }

    public display(): string {
        return "I'm a rubber duck.";
    }
}