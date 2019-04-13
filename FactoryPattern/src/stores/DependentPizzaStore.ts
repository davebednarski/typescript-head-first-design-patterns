import Pizza from "../Pizza";
import ChicagoStyleCheesePizza from "../chicagoStyle/ChicagoStyleCheesePizza";
import NYStyleCheesePizza from "../nyStyle/NYStyleCheesePizza";
import ChicagoStyleVeggiePizza from "../chicagoStyle/ChicagoStyleVeggiePizza";
import NYStyleClamPizza from "../nyStyle/NYStyleClamPizza";
import ChicagoStylePepperoniPizza from "../chicagoStyle/ChicagoStylePepperoniPizza";
import ChicagoStyleClamPizza from "../chicagoStyle/ChicagoStyleClamPizza";
import NYStylePepperoniPizza from "../nyStyle/NYStylePepperoniPizza";
import NYStyleVeggiePizza from "../nyStyle/NYStyleVeggiePizza";

export default class DependentPizzaStore {
    
    public createPizza(style:string, type:string):Pizza {
        let pizza:Pizza = null;

        if (style === "NY") {
            if (type === "cheese") {
                pizza = new NYStyleCheesePizza();
            }
            else if (type === "veggie") {
                pizza = new NYStyleVeggiePizza();
            }
            else if (type === "clam") {
                pizza = new NYStyleClamPizza();
            }
            else if (type === "pepperoni") {
                pizza = new NYStylePepperoniPizza();
            }
        }
        else if (style === "Chicago") {
            if (type === "cheese") {
                pizza = new ChicagoStyleCheesePizza();
            }
            else if (type === "veggie") {
                pizza = new ChicagoStyleVeggiePizza();
            }
            else if (type === "clam") {
                pizza = new ChicagoStyleClamPizza();
            }
            else if (type === "pepperoni") {
                pizza = new ChicagoStylePepperoniPizza();
            }
        }
        else {
            console.log("Error: invalid type of pizza");
            return null;
        }

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}