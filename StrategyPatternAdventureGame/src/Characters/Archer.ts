import Character from "../Character";
import BowBehavior from "../WeaponBehaviors/BowBehavior";

export default class Archer extends Character {
	constructor() {
		super(new BowBehavior(), 'Archer');
	}

}