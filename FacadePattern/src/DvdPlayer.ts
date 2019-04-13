import Amplifier from "./Amplifier";

export default class DvdPlayer {
    private readonly description: string;
    private amplifier: Amplifier;
    private movie: any;
    private currentTrack: number;

    constructor(description: string, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }

    public on(): void {
        console.log(this.description + " on");
    }

    public off(): void {
        console.log(this.description + " off");
    }

    public eject(): void {
        this.movie = null;
        console.log(this.description + " eject");
    }

    public play(movie:string): void;
    public play(track:number): void;
    public play(x: any): any {

        if (typeof x === 'string') {
            this.movie = x;
            this.currentTrack = 0;
            console.log(this.description + " playing \"" + x + "\"");
        }

        if (typeof x === 'number') {
            if (this.movie == null) {
                console.log(this.description + " can't play track " + x + " no dvd inserted");
            }
            else {
                this.currentTrack = x;
                console.log(this.description + " playing track " + this.currentTrack + " of \"" + this.movie + "\"");
            }
        }
    }
    
    public stop(): void {
        this.currentTrack = 0;
        console.log(this.description + " stopped \"" + this.movie + "\"");
    }
    
    public pause(): void {
        console.log(this.description + " paused \"" + this.movie + "\"");
    }
    
    public setTwoChannelAudio(): void {
        console.log(this.description + " set two channel audio");
    }
    
    public setSurroundAudio(): void {
        console.log(this.description + " set surround audio");
    }
    
    public toString(): string {
        return this.description;
    }
}