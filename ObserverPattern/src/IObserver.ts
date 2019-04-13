export default interface IObserver {
    update(temp:number, humidity:number, pressure:number):void;
}