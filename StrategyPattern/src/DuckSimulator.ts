import Duck from "./Duck";
import MallardDuck from "./Ducks/MallardDuck";
import RubberDuck from "./Ducks/RubberDuck";
import FlyRocketPowered from "./FlyBehaviors/FlyRocketPowered";

export default class DuckSimulator {

	private mallard: Duck;
	private rubberDuck: Duck;

	constructor() {
		this.mallard = new MallardDuck();
		this.rubberDuck = new RubberDuck();
	}

	simulateTalking():string {
		return `Mallard: ${this.mallard.display()} <br>Rubber: ${this.rubberDuck.display()}`;
	}

	simulateQuack():string {
		return `Mallard: ${this.mallard.performQuack()} <br>Rubber: ${this.rubberDuck.performQuack()}`;
	}

	simulateFly():string {
		return `Mallard: ${this.mallard.performFly()} <br>Rubber: ${this.rubberDuck.performFly()}`;
	}

	simulateChangeBehaviorDynamically():string {
		this.mallard.setFlyBehavior(new FlyRocketPowered());
		return `<br>(Changed Mallard behavior)<br><br>Mallard: ${this.mallard.performFly()}`;
	}
}