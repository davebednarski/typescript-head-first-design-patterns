import NYPizzaStore from "./stores/NYPizzaStore";
import ChicagoPizzaStore from "./stores/ChicagoPizzaStore";
import PizzaStore from "./stores/PizzaStore";


export default class Main {

    constructor() {
        let nyStore:PizzaStore = new NYPizzaStore();
        let chicagoStore:PizzaStore = new ChicagoPizzaStore();

        let pizza = nyStore.orderPizza("cheese");
        console.log("Ethan ordered a " + pizza.getName() + "\n");

        pizza = chicagoStore.orderPizza("cheese");
        console.log("Joel ordered a " + pizza.getName() + "\n");

        pizza = nyStore.orderPizza("clam");
        console.log("Ethan ordered a " + pizza.getName() + "\n");

        pizza = chicagoStore.orderPizza("clam");
        console.log("Joel ordered a " + pizza.getName() + "\n");

        pizza = nyStore.orderPizza("pepperoni");
        console.log("Ethan ordered a " + pizza.getName() + "\n");

        pizza = chicagoStore.orderPizza("pepperoni");
        console.log("Joel ordered a " + pizza.getName() + "\n");

        pizza = nyStore.orderPizza("veggie");
        console.log("Ethan ordered a " + pizza.getName() + "\n");

        pizza = chicagoStore.orderPizza("veggie");
        console.log("Joel ordered a " + pizza.getName() + "\n");
    }
}