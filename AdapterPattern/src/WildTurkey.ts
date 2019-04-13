import ITurkey from './ITurkey';

export default class WildTurkey implements ITurkey {
    public gobble():void {
        console.log("Gobble gobble");
    }

    public fly():void {
        console.log("I'm flying a short distance");
    }
}