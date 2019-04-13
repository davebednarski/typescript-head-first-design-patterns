import Pizza from "./Pizza";

export default class PepperoniPizza extends Pizza {

    constructor() {
        super();
        this.name = "Pepperoni Pizza";
        this.dough = "Reg Crust";
        this.sauce = "Marinara sauce";
        this.toppings.push("Sliced Pepperoni");
        this.toppings.push("Sliced Onion");
        this.toppings.push("Grated parmesan cheese");
    }
}