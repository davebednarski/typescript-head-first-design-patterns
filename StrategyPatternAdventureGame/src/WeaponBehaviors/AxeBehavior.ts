import WeaponBehavior from "./WeaponBehavior";

export default class AxeBehavior implements WeaponBehavior {
	useWeapon(): string {
		return 'using axe.';
	}

}