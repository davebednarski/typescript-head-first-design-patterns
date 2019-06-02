import FlyBehavior from './FlyBehaviors/FlyBehavior';
import QuackBehavior from './QuackBehaviors/QuackBehavior';

export default abstract class Duck {
	public flyBehavior: FlyBehavior;
	public quackBehavior: QuackBehavior;
	public duckType: string;

	constructor() {
	}

	public abstract display():string;

	public performFly():string {
		return this.flyBehavior.fly();
	}

	public performQuack():string {
		return this.quackBehavior.quack();
	}

	public swim():void {
		console.log('All ducks float, even decoys');
	}

	/**
	 * adds ability to set behavior at runtime if desired
	 * @param fb
	 */
	public setFlyBehavior(fb: FlyBehavior):void {
		this.flyBehavior = fb;
	}

	/**
	 * adds ability to set behavior at runtime if desired
	 * @param qb
	 */
	public setQuackBehavior(qb: QuackBehavior):void {
		this.quackBehavior = qb;
	}

	public behaviorToString(behavior: string):string {
		return `${this.duckType} behavior: ${behavior}`;
	}
}