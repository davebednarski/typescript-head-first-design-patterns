import WeaponBehavior from "./WeaponBehavior";

export default class SwordBehavior implements WeaponBehavior {
	useWeapon(): string {
		return 'using sword.';
	}

}