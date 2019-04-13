import Amplifier from "./Amplifier";

export default class CdPlayer {
    private readonly description: string;
    private amplifier: Amplifier;
    private currentTrack: number;
    private title: string;

    constructor(description: string, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }

    public on():void {
        console.log(this.description + " on");
    }

    public off(): void {
        console.log(this.description + " off");
    }

    public eject(): void {
        this.title = null;
        console.log(this.description + " eject");
    }

    public play(title: string): void;
    public play(track: number): void;
    public play(x: any): any {
        if (typeof x === 'string') {

            this.title = x;
            this.currentTrack = 0;
            console.log(this.description + " playing \"" + x + "\"");
        }

        if (typeof x === 'number') {
            if (this.title == null) {
                console.log(this.description + " can't play track " + this.currentTrack +
                    ", no cd inserted");
            } else {
                this.currentTrack = x;
                console.log(this.description + " playing track " + this.currentTrack);
            }
        }
    }
    
    public stop(): void {
        this.currentTrack = 0;
        console.log(this.description + " stopped");
    }
    
    public pause(): void {
        console.log(this.description + " paused \"" + this.title + "\"");
    }
    
    public toString(): string {
        return this.description;
    }
}