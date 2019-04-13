import IState from "./IState";
import GumballMachine from "./GumballMachine";

export default class NoQuarterState implements IState {
	gumballMachine:GumballMachine;

	constructor(gumballMachine:GumballMachine) {
		this.gumballMachine = gumballMachine;
	}

	public insertQuarter():void {
		console.log("You inserted a quarter");
		this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
	}

	public ejectQuarter():void {
		console.log("You haven't inserted a quarter");
	}

	public turnCrank():void {
		console.log("You turned, but there's no quarter");
	}

	public dispense():void {
		console.log("You need to pay first");
	}

	public refill():void { }

	public toString():string {
		return "waiting for quarter";
	}
}