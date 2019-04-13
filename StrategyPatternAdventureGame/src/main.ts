import Character from "./Character";
import Archer from "./Characters/Archer";
import King from "./Characters/King";
import Knight from "./Characters/Knight";
import Queen from "./Characters/Queen";
import Troll from "./Characters/Troll";

import AxeBehavior from "./WeaponBehaviors/AxeBehavior";
import SwordBehavior from "./WeaponBehaviors/SwordBehavior";

export default class Main {
	private archer: Character;
	private king: Character;
	private knight: Character;
	private queen: Character;
	private troll: Character;

	constructor() {

		// create the characters
		this.archer = new Archer();
		this.king = new King();
		this.knight = new Knight();
		this.queen = new Queen();
		this.troll = new Troll();
	}

	public playArcher():string {
		return this.archer.behaviorToString(this.archer.useWeapon());
	}

	public playKing():string {
		return this.king.behaviorToString(this.king.useWeapon());
	}

	public playKnight():string {
		return this.knight.behaviorToString(this.knight.useWeapon());
	}

	public playQueen():string {
		return this.queen.behaviorToString(this.queen.useWeapon());
	}

	public playTroll():string {
		return this.troll.behaviorToString(this.troll.useWeapon());
	}

}