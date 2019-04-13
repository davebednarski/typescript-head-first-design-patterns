import Pizza from "../Pizza";

export default abstract class PizzaStore {

    abstract createPizza(item:string):Pizza;
    
    public orderPizza(type:string):Pizza {

        let pizza: Pizza = this.createPizza(type);
        console.log("--- Making a " + pizza.getName() + " ---");
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    
        return pizza;
    }
}