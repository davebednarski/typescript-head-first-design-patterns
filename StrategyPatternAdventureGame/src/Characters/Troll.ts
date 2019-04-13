import Character from "../Character";
import AxeBehavior from "../WeaponBehaviors/AxeBehavior";

export default class Troll extends Character {
	constructor() {
		super(new AxeBehavior(), 'Troll');
	}
}