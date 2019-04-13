import Beverage from "./Beverage";
import DarkRoast from "./DarkRoast";
import Milk from "./Milk";
import Whip from "./Whip";
import Soy from "./Soy";

export default class Main {
	constructor() {

		let darkRoast: Beverage = new DarkRoast();

		// Drink 1
		let milk = new Milk(darkRoast);
		console.log(`Drink 1 costs ${milk.cost()}`);

		// Drink 2
		let soy = new Soy(darkRoast);
		let whip = new Whip(soy);
		console.log(`Drink 2 costs ${whip.cost()}`);
	}
}