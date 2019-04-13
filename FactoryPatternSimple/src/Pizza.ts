export default abstract class Pizza {
    protected name: string;
    protected dough: string;
    protected sauce: string;
    protected toppings: Array<string> = [];

    public getName():string {
        return this.name;
    }

    public prepare():void {
        console.log("Preparing " + this.name);
    }

    public bake():void {
        console.log("Baking " + this.name);
    }

    public cut():void {
        console.log("Cutting " + this.name);
    }

    public box():void {
        console.log("Boxing " + this.name);
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