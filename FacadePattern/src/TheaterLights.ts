export default class TheaterLights {
    private readonly description: string;

    constructor(description: string) {
        this.description = description;
    }
    
    public on():void {
        console.log(this.description + " on");
    }
    
    public off():void {
        console.log(this.description + " off");
    }
    
    public dim(level:number):void {
        console.log(this.description + " dimming to " + level  + "%");
    }
    
    public toString():string {
        return this.description;
    }
}