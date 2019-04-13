import Pizza from "./Pizza";

export default class VeggiePizza extends Pizza {

    constructor() {
        super();
        this.name = "Veggie Pizza";
        this.dough = "Reg Crust";
        this.sauce = "Marinara  Sauce";
        this.toppings.push("Shredded Mozzarella");
        this.toppings.push("Diced onion");
        this.toppings.push("Sliced mushrooms");
        this.toppings.push("Sliced red pepper");
        this.toppings.push("Sliced black olives");
    }
}