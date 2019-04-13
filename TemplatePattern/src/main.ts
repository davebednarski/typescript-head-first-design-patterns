import Tea from "./Tea";
import CoffeeWithHook from "./CoffeeWithHook";
import Coffee from "./Coffee";
import TeaWithHook from "./TeaWithHook";

export default class Main {
	constructor() {

		let tea:Tea = new Tea();
		let coffee:Coffee = new Coffee();

		console.log("\nMaking tea...");
		tea.prepareRecipe();

		console.log("\nMaking coffee...");
		coffee.prepareRecipe();


		let teaHook:TeaWithHook = new TeaWithHook();
		let coffeeHook:CoffeeWithHook = new CoffeeWithHook();

		console.log("\nMaking tea...");
		teaHook.prepareRecipe();

		console.log("\nMaking coffee...");
		coffeeHook.prepareRecipe();
	}
}