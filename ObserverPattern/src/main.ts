import WeatherStation from "./WeatherStation";
import LCDDisplay from "./LCDDisplay";


export default class Main {
	constructor() {
		let weatherStation: WeatherStation = new WeatherStation();
		let display: LCDDisplay = new LCDDisplay(weatherStation);

		// Mock data
		let interval = setInterval(() => {
			weatherStation.setMeasurements(Main.getRandomNumber(), Main.getRandomNumber(), Main.getRandomNumber());
		}, 1000);

		// stop from running indefinitely
		setTimeout(() => {
			clearInterval(interval);
		}, 5000);
	}

	/**
	 * Get a random number for mock data
	 */
	public static getRandomNumber() {
		return Math.round(Math.random() * 100);
	}
}