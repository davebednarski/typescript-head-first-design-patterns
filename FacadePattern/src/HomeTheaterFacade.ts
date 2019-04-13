import Amplifier from "./Amplifier";
import Tuner from "./Tuner";
import DvdPlayer from "./DvdPlayer";
import CdPlayer from "./CdPlayer";
import Projector from "./Projector";
import TheaterLights from "./TheaterLights";
import TheaterScreen from "./TheaterScreen";
import PopcornPopper from "./PopcornPopper";

export default class HomeTheaterFacade {
    private readonly tuner: Tuner;
    private amp: Amplifier;
    private readonly dvd: DvdPlayer;
    private readonly cd: CdPlayer;
    private projector: Projector;
    private screen: TheaterScreen;
    private lights: TheaterLights;
    private popper: PopcornPopper;
    
    constructor(amp: Amplifier, tuner: Tuner, dvd: DvdPlayer, cd: CdPlayer, projector: Projector, screen: TheaterScreen, lights: TheaterLights, popper: PopcornPopper) {
        this.amp = amp;
        this.tuner = tuner;
        this.dvd = dvd;
        this.cd = cd;
        this.projector = projector;
        this.screen = screen;
        this.lights = lights;
        this.popper = popper;
    }

    public watchMovie(movie:string):void {
        console.log("Get ready to watch a movie...");
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setDvd(this.dvd);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    }
    
    public endMovie():void {
        console.log("Shutting movie theater down...");
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.dvd.stop();
        this.dvd.eject();
        this.dvd.off();
    }
    
    public listenToCd(cdTitle:string):void {
        console.log("Get ready for an audiopile experence...");
        this.lights.on();
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setCd(this.cd);
        this.amp.setStereoSound();
        this.cd.on();
        this.cd.play(cdTitle);
    }
    
    public endCd():void {
        console.log("Shutting down CD...");
        this.amp.off();
        this.amp.setCd(this.cd);
        this.cd.eject();
        this.cd.off();
    }
    
    public listenToRadio(frequency:number):void {
        console.log("Tuning in the airwaves...");
        this.tuner.on();
        this.tuner.setFrequency(frequency);
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setTuner(this.tuner);
    }
    
    public endRadio():void {
        console.log("Shutting down the tuner...");
        this.tuner.off();
        this.amp.off();
    }
}