import WeaponBehavior from "./WeaponBehaviors/WeaponBehavior";

export default class Character {
	public weaponBehavior: WeaponBehavior;
	public character: string;

	constructor(wp: WeaponBehavior, character: string) {
		this.weaponBehavior = wp;
		this.character = character;
	}

	public useWeapon():string {
		return this.weaponBehavior.useWeapon();
	}

	public behaviorToString(behavior: string):string {
		return `${this.character} behavior: ${behavior}`;
	}
}