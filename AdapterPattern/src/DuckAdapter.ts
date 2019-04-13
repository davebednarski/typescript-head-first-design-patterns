import ITurkey from "./ITurkey";
import IDuck from "./IDuck";

export default class DuckAdapter implements ITurkey {
    duck:IDuck;
    rand:number;

    public constructor(duck:IDuck) {
        this.duck = duck;
        this.rand = Math.random();
    }

    public gobble():void {
        this.duck.quack();
    }

    public fly():void {
        if (this.rand == 0) {
            this.duck.fly();
        }
    }
}