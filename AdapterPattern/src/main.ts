import MallardDuck from './Mallard';
import WildTurkey from './WildTurkey';
import TurkeyAdapter from './TurkeyAdapter';
import IDuck from './IDuck';

export default class Main {
	constructor() {
		let duck: MallardDuck = new MallardDuck();

		let turkey: WildTurkey = new WildTurkey();
		let turkeyAdapter: IDuck = new TurkeyAdapter(turkey);

		console.log("The Turkey says...");
		turkey.gobble();
		turkey.fly();

		console.log("\nThe Duck says...");
		Main.testDuck(duck);

		console.log("\nThe TurkeyAdapter says...");
		Main.testDuck(turkeyAdapter);
	}

	public static testDuck(duck: IDuck):void {
		duck.quack();
		duck.fly();
	}
}