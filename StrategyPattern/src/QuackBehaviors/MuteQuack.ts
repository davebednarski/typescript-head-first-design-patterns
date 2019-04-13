import QuackBehavior from "./QuackBehavior";

export default class MuteQuack implements QuackBehavior {
	public quack():string {
		return '<< silence >>';
	};
}