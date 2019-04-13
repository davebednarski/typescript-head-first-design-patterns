import IObserver from "./IObserver";

export default interface IObservable {
    add(o:IObserver):void;
    remove(o:IObserver):void;
    notify():void;
}