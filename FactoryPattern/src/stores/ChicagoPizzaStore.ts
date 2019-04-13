import ChicagoStyleCheesePizza from "../chicagoStyle/ChicagoStyleCheesePizza";
import ChicagoStyleVeggiePizza from "../chicagoStyle/ChicagoStyleVeggiePizza";
import Pizza from "../Pizza";
import ChicagoStyleClamPizza from "../chicagoStyle/ChicagoStyleClamPizza";
import ChicagoStylePepperoniPizza from "../chicagoStyle/ChicagoStylePepperoniPizza";
import PizzaStore from "./PizzaStore";


export default class ChicagoPizzaStore extends PizzaStore {

    createPizza(item: string):Pizza {
        if (item === "cheese") {
            return new ChicagoStyleCheesePizza();
        }
        else if (item === "veggie") {
            return new ChicagoStyleVeggiePizza();
        }
        else if (item === "clam") {
            return new ChicagoStyleClamPizza();
        }
        else if (item === "pepperoni") {
            return new ChicagoStylePepperoniPizza();
        }
        else {
            return null;
        }
    }
}