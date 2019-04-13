import IObservable from "./IObservable";
import IDisplayElement from "./IDisplayElement";
import IObserver from "./IObserver";

export default class LCDDisplay implements IObserver, IDisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: IObservable;

    constructor(wd: IObservable) {
        this.weatherData = wd;
        wd.add(this);
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }

    display(): void {
        console.log(`Current conditions: ${this.temperature}F degrees`);
    }

}