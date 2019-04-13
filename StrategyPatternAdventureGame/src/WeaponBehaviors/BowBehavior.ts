import WeaponBehavior from "./WeaponBehavior";

export default class BowBehavior implements WeaponBehavior {
	useWeapon(): string {
		return 'using bow.';
	}
}