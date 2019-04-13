import CaffeineBeverage from "./CaffeineBeverage";

export default class Coffee extends CaffeineBeverage {
    public brew():void {
        console.log("Dripping Coffee through filter");
    }
    public addCondiments():void {
        console.log("Adding Sugar and Milk");
    }
}