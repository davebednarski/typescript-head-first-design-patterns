import QuackBehavior from "./QuackBehavior";

export default class Quack implements QuackBehavior {
	public quack():string {
		return 'quack';
	};
}