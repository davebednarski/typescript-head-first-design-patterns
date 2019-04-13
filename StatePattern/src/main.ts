import GumballMachine from "./GumballMachine";

export default class Main {
	constructor() {
		let gumballMachine:GumballMachine = new GumballMachine(11);

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		console.log('\n');

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		console.log('\n');

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		console.log('\n');

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		console.log('\n');

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		console.log('\n');

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		console.log('\n');

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		console.log('\n');

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		console.log('\n');

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		console.log('\n');

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
	}
}