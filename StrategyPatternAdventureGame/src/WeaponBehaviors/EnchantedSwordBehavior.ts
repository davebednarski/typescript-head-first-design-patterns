import WeaponBehavior from "./WeaponBehavior";

export default class EnchantedSwordBehavior implements WeaponBehavior {
	useWeapon(): string {
		return 'using enchanted sword.';
	}
}