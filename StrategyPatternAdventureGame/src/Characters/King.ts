import Character from "../Character";
import SwordBehavior from "../WeaponBehaviors/SwordBehavior";

export default class King extends Character {
	constructor() {
		super(new SwordBehavior(), 'King');
	}
}