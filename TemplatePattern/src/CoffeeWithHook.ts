import CaffeineBeverageWithHook from "./CaffeineBeverageWithHook";

export default class CoffeeWithHook extends CaffeineBeverageWithHook {

    public brew():void {
        console.log("Dripping Coffee through filter");
    }

    public addCondiments():void {
        console.log("Adding Sugar and Milk");
    }

    public customerWantsCondiments():boolean {

        let answer:string = CoffeeWithHook.getUserInput();

        if (answer.toLowerCase().startsWith("y")) {
            return true;
        }
        else {
            return false;
        }
    }

    private static getUserInput():string {

        if (window.confirm("Would you like milk and sugar with your coffee (y/n)? ")) {
            return 'yes';
        }
        else {
            return 'no'
        }
    }
}