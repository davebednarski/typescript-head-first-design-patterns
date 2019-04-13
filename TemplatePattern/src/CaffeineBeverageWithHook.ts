export default abstract class CaffeineBeverageWithHook {

    prepareRecipe():void {
        this.boilWater();
        this.brew();
        this.pourInCup();

        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }

    abstract brew():void;

    abstract addCondiments():void;

    boilWater():void {
        console.log("Boiling water");
    }

    pourInCup():void {
        console.log("Pouring into cup");
    }

    customerWantsCondiments():boolean {
        return true;
    }
}