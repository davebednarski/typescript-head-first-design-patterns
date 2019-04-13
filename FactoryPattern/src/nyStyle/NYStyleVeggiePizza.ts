import Pizza from "../Pizza";

export default class NYStyleVeggiePizza extends Pizza {
    
    constructor() {
        super();
        
        this.name = "NY Veggie Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Plum Tomato Sauce";

        this.toppings.push("Shredded Mozzarella Cheese");
        this.toppings.push("Black Olives");
        this.toppings.push("Spinach");
        this.toppings.push("Eggplant");
    }

    cut():void {
        console.log("Cutting the pizza into wedge slices");
    }
}