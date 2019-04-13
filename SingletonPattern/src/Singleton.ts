export default class Singleton {
    private static uniqueInstance: Singleton;
    private myNumber:number;

    private constructor() {
        this.myNumber = 1;
    }

    public static getInstance():Singleton {
        if (!this.uniqueInstance) {
            this.uniqueInstance = new Singleton();
        }
        return this.uniqueInstance;
    }

    public getNumber():number {
        this.myNumber = this.myNumber + 1;
        return this.myNumber;
    }
}