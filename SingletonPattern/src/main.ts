import Singleton from './Singleton';

export default class Main {
	constructor() {

		// number in Singleton starts at 1
		// add one with every getNumber() call
		// Since same instance, the number will increment each call.
		// If it was a different instance for every call, it would always be 2.

		let mySingleton1 = Singleton.getInstance();
		console.log(mySingleton1.getNumber());

		let mySingleton2 = Singleton.getInstance();
		console.log(mySingleton2.getNumber());

		let mySingleton3 = Singleton.getInstance();
		console.log(mySingleton3.getNumber());

		let mySingleton4 = Singleton.getInstance();
		console.log(mySingleton4.getNumber());

		let mySingleton5 = Singleton.getInstance();
		console.log(mySingleton5.getNumber());
	}
}