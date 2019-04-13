import Beverage from "./Beverage";

export default class DarkRoast extends Beverage {
    cost(): number {
        return 1.00;
    }
}