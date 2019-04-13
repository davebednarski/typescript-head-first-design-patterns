import Duck from "./Duck";
import MallardDuck from "./Ducks/MallardDuck";

export default class DuckSimulator {

	private mallard: Duck;

	constructor() {
		this.mallard = new MallardDuck();
	}

	simulationMallardTalking():string {
		return this.mallard.display();
	}

	simulateMallardQuack():string {
		return this.mallard.performQuack();
	}

	simulateMallardFly():string {
		return this.mallard.performFly();
	}
}