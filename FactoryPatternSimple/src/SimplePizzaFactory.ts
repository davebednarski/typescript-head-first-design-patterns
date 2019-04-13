import Pizza from "./Pizza";
import CheesePizza from "./CheesePizza";
import PepperoniPizza from "./PepperoniPizza";
import ClamPizza from "./ClamPizza";
import VeggiePizza from "./VeggiePizza";

export default class SimplePizzaFactory {

    public createPizza(type:string):Pizza {
        let pizza:Pizza = null;

        if (type === "cheese") {
            pizza = new CheesePizza();
        }
        else if (type === "pepperoni") {
            pizza = new PepperoniPizza();
        }
        else if (type === "clam") {
            pizza = new ClamPizza();
        }
        else if (type === "veggie") {
            pizza = new VeggiePizza();
        }
        return pizza;
    }
}