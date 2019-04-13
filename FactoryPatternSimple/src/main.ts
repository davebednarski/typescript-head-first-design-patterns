import Pizza from "./Pizza";
import SimplePizzaFactory from "./SimplePizzaFactory";
import PizzaStore from "./PizzaStore";

export default class Main {
    private pizza:Pizza;

    constructor() {
        let factory:SimplePizzaFactory = new SimplePizzaFactory();
        let store:PizzaStore = new PizzaStore(factory);

        this.pizza = store.orderPizza("cheese");
        console.log("We ordered a " + this.pizza.getName() + "\n");
        console.log(this.pizza);

        this.pizza = store.orderPizza("veggie");
        console.log("We ordered a " + this.pizza.getName() + "\n");
        console.log(this.pizza);
    }
}