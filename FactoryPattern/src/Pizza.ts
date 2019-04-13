export default abstract class Pizza {
    protected name: string;
    protected dough: string;
    protected sauce: string;
    protected toppings: Array<string> = [];

    public prepare():void {
        console.log("Prepare " + name);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: ");

        this.toppings.forEach((topping) => {
            console.log("   " + topping);
        });
    }

    public bake():void {
        console.log("Bake for 25 minutes at 350");
    }

    public cut():void {
        console.log("Cut the pizza into diagonal slices");
    }

    public box():void {
        console.log("Place pizza in official PizzaStore box");
    }

    public getName():string {
        return this.name;
    }

    public toString():string {

        // code to display pizza name and ingredients
        let display = `---- ${this.name} ----\n ${this.dough} \n ${this.sauce}\n`;

        this.toppings.forEach((topping) => {
            display += `${topping} \n`
        });

        return display.toString();
    }
}