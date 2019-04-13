import FlyBehavior from './FlyBehaviors/FlyBehavior';
import QuackBehavior from './QuackBehaviors/QuackBehavior';

export default abstract class Duck {
	public flyBehavior: FlyBehavior;
	public quackBehavior: QuackBehavior;
	public duckType: string;

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

	public behaviorToString(behavior: string):string {
		return `${this.duckType} behavior: ${behavior}`;
	}

}