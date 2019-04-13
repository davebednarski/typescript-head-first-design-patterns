import Amplifier from "./Amplifier";
import Tuner from "./Tuner";
import DvdPlayer from "./DvdPlayer";
import CdPlayer from "./CdPlayer";
import Projector from "./Projector";
import PopcornPopper from "./PopcornPopper";
import TheaterLights from "./TheaterLights";
import HomeTheaterFacade from "./HomeTheaterFacade";
import TheaterScreen from "./TheaterScreen";


export default class Main {
	constructor() {
		let amp: Amplifier = new Amplifier("Top-O-Line Amplifier");
		let tuner: Tuner = new Tuner("Top-O-Line AM/FM Tuner", amp);
		let dvd: DvdPlayer = new DvdPlayer("Top-O-Line DVD Player", amp);
		let cd: CdPlayer = new CdPlayer("Top-O-Line CD Player", amp);
		let projector: Projector = new Projector("Top-O-Line Projector", dvd);
		let lights: TheaterLights = new TheaterLights("Theater Ceiling Lights");
		let screen: TheaterScreen = new TheaterScreen("Theater Screen");
		let popper: PopcornPopper = new PopcornPopper("Popcorn Popper");

		let homeTheater: HomeTheaterFacade = new HomeTheaterFacade(amp, tuner, dvd, cd, projector, screen, lights, popper);

		homeTheater.watchMovie("Raiders of the Lost Ark");
		homeTheater.endMovie();
	}
}