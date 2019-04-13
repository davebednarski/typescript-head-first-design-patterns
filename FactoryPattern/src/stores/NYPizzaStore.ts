import NYStyleCheesePizza from "../nyStyle/NYStyleCheesePizza";
import NYStyleClamPizza from "../nyStyle/NYStyleClamPizza";
import NYStylePepperoniPizza from "../nyStyle/NYStylePepperoniPizza";
import NYStyleVeggiePizza from "../nyStyle/NYStyleVeggiePizza";
import Pizza from "../Pizza";
import PizzaStore from "./PizzaStore";

export default class NYPizzaStore extends PizzaStore {

    createPizza(item:string):Pizza {
        if (item === "cheese") {
            return new NYStyleCheesePizza();
        }
        else if (item === "veggie") {
            return new NYStyleVeggiePizza();
        }
        else if (item === "clam") {
            return new NYStyleClamPizza();
        }
        else if (item === "pepperoni") {
            return new NYStylePepperoniPizza();
        }
        else {
            return null;
        }
    }
}