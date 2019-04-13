import IState from "./IState";
import GumballMachine from "./GumballMachine";

export default class SoldState implements IState {
	gumballMachine:GumballMachine;

	constructor(gumballMachine:GumballMachine) {
		this.gumballMachine = gumballMachine;
	}

	public insertQuarter():void {
		console.log("Please wait, we're already giving you a gumball");
	}

	public ejectQuarter():void {
		console.log("Sorry, you already turned the crank");
	}

	public turnCrank():void {
		console.log("Turning twice doesn't get you another gumball!");
	}

	public dispense():void {
		this.gumballMachine.releaseBall();
		if (this.gumballMachine.getCount() > 0) {
			this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
		} else {
			console.log("Oops, out of gumballs!");
			this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
		}
	}

	public refill():void { }

	public toString():string {
		return "dispensing a gumball";
	}
}