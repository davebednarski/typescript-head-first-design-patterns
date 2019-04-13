import State from "./IState";
import SoldOutState from "./SoldOutState";
import NoQuarterState from "./NoQuarterState";
import HasQuarterState from "./HasQuarterState";
import SoldState from "./SoldState";
import WinnerState from "./WinnerState";

export default class GumballMachine {

	soldOutState: State;
	noQuarterState: State;
	hasQuarterState: State;
	soldState: State;
	winnerState: State;

	state: State = this.soldOutState;
	count:number = 0;

	constructor(numberGumballs: number) {
		this.soldOutState = new SoldOutState(this);
		this.noQuarterState = new NoQuarterState(this);
		this.hasQuarterState = new HasQuarterState(this);
		this.soldState = new SoldState(this);
		this.winnerState = new WinnerState(this);

		this.count = numberGumballs;
		if (numberGumballs > 0) {
			this.state = this.noQuarterState;
		}
	}

	public insertQuarter():void {
		this.state.insertQuarter();
	}

	public ejectQuarter():void {
		this.state.ejectQuarter();
	}

	public turnCrank():void {
		this.state.turnCrank();
		this.state.dispense();
	}

	setState(state:State):void {
		this.state = state;
	}

	releaseBall():void {
		console.log("A gumball comes rolling out the slot...");
		if (this.count != 0) {
			this.count = this.count - 1;
		}
	}

	getCount():number {
		return this.count;
	}

	refill(count:number):void {
		this.count += count;
		console.log("The gumball machine was just refilled; it's new count is: " + this.count);
		this.state.refill();
	}

	public getState(): State {
		return this.state;
	}

	public getSoldOutState(): State {
		return this.soldOutState;
	}

	public getNoQuarterState(): State {
		return this.noQuarterState;
	}

	public getHasQuarterState(): State {
		return this.hasQuarterState;
	}

	public getSoldState(): State {
		return this.soldState;
	}

	public getWinnerState(): State {
		return this.winnerState;
	}

	public toString():string {

		let plural = (this.count != 1) ? 's' : '';

		let result = `Mighty Gumball, Inc.
			Java-enabled Standing Gumball Model #2004
			Inventory: ${this.count} gumball${plural}
		
			Machine is ${this.state}`;

		return result;
	}
}