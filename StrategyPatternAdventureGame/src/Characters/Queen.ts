import Character from "../Character";
import EnchantedSwordBehavior from "../WeaponBehaviors/EnchantedSwordBehavior";

export default class Queen extends Character {
	constructor() {
		super(new EnchantedSwordBehavior(), 'Queen');
	}
}