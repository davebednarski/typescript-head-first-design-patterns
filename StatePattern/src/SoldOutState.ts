import IState from "./IState";
import GumballMachine from "./GumballMachine";

export default class SoldOutState implements IState {
	gumballMachine:GumballMachine;

	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine;
	}

	public insertQuarter():void {
		console.log("You can't insert a quarter, the machine is sold out");
	}

	public ejectQuarter():void {
		console.log("You can't eject, you haven't inserted a quarter yet");
	}

	public turnCrank():void {
		console.log("You turned, but there are no gumballs");
	}

	public dispense():void {
		console.log("No gumball dispensed");
	}

	public refill():void {
		this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
	}

	public toString():string {
		return "sold out";
	}
}