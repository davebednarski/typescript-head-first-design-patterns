import Amplifier from "./Amplifier";

export default class Tuner {
    private readonly description: string;
    private frequency: number;

    constructor(description: string, amp: Amplifier) {
        this.description = description;
    }

    public on() {
        console.log(this.description + " on");
    }

    public off() {
        console.log(this.description + " off");
    }

    public setFrequency(frequency:number) {
        console.log(this.description + " setting frequency to " + frequency);
        this.frequency = frequency;
    }

    public setAm():void {
        console.log(this.description + " setting AM mode");
    }

    public setFm():void {
        console.log(this.description + " setting FM mode");
    }

    public toString():string {
        return this.description;
    }
}