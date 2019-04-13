import WeaponBehavior from "./WeaponBehavior";

export default class KnifeBehavior implements WeaponBehavior {
	useWeapon(): string {
		return 'using knife';
	}
}