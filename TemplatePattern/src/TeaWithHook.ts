import CaffeineBeverageWithHook from "./CaffeineBeverageWithHook";

export default class TeaWithHook extends CaffeineBeverageWithHook {

    public brew():void {
        console.log("Steeping the tea");
    }

    public addCondiments():void {
        console.log("Adding Lemon");
    }

    public customerWantsCondiments():boolean {

        let answer:string = TeaWithHook.getUserInput();

        if (answer.toLowerCase().startsWith("y")) {
            return true;
        }
        else {
            return false;
        }
    }

    private static getUserInput():string {

        if (window.confirm("Would you like lemon with your tea (y/n)? ")) {
            return 'yes';
        }
        else {
            return 'no';
        }
    }
}