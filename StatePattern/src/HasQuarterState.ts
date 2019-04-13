import IState from "./IState";
import GumballMachine from "./GumballMachine";

export default class HasQuarterState implements IState {
	gumballMachine:GumballMachine;

	constructor(gumballMachine:GumballMachine) {
		this.gumballMachine = gumballMachine;
	}

	public insertQuarter():void {
		console.log("You can't insert another quarter");
	}

	public ejectQuarter():void {
		console.log("Quarter returned");
		this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
	}

	public turnCrank():void {
		console.log("You turned...");
		let winner:number = HasQuarterState.getRandomNumber();

		// 10% chance of match to be a winner
		if ((winner === 1) && (this.gumballMachine.getCount() > 1)) {
			this.gumballMachine.setState(this.gumballMachine.getWinnerState());
		}
		else {
			this.gumballMachine.setState(this.gumballMachine.getSoldState());
		}
	}

	public dispense():void {
		console.log("No gumball dispensed");
	}

	public refill():void { }

	public toString():string {
		return "waiting for turn of crank";
	}

	/**
	 * Get a random number from 1 - 10
	 */
	private static getRandomNumber() {
		return Math.floor(Math.random() * 10) + 1;
	}
}