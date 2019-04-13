import SimplePizzaFactory from "./SimplePizzaFactory";
import Pizza from "./Pizza";

export default class PizzaStore {
    private factory: SimplePizzaFactory;
    
    constructor(factory:SimplePizzaFactory) {
        this.factory = factory;
    }
    
    public orderPizza(type:string):Pizza {

        let pizza: Pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    
        return pizza;
    }
}