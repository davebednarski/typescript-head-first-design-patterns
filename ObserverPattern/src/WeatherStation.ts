import IObservable from "./IObservable";
import IObserver from "./IObserver";

export default class WeatherStation implements IObservable {
    private observers: IObserver[];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = [];
    }

    public add(o: IObserver): void {
        this.observers.push(o);
    }

    public remove(o: IObserver): void {
        let index: number = this.observers.indexOf(o);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    public notify(): void {
        for (let i:number = 0, len:number = this.observers.length; i < len; i++) {
            let observer:IObserver = this.observers[i];
            observer.update(this.temperature, this.pressure, this.humidity);
        }
    }

    public measurementsChanges():void {
        this.notify();
    }

    public setMeasurements(temperature:number, humidity:number, pressure:number):void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.measurementsChanges();
    }

    // other weather methods below
}