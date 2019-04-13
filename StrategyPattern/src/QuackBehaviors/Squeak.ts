import QuackBehavior from "./QuackBehavior";

export default class Squeak implements QuackBehavior {
	public quack():string {
		return 'squeak';
	};
}