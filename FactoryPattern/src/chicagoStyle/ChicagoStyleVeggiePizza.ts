import Pizza from "../Pizza";

export default class ChicagoStyleVeggiePizza extends Pizza {
    
    constructor() {
        super();
        
        this.name = "Chicago Deep Dish Veggie Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";

        this.toppings.push("Shredded Mozzarella Cheese");
        this.toppings.push("Black Olives");
        this.toppings.push("Spinach");
        this.toppings.push("Eggplant");
    }

    cut():void {
        console.log("Cutting the pizza into square slices");
    }
}