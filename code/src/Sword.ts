import { Weapon } from './Weapon';

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number,
  ) {
    super('Sword', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    let newDamage = this.getBaseDamage() + this.MODIFIER_CHANGE_RATE;
    if (this.getBaseDamage() > 125) newDamage = 125;
    this.setBaseDamage(newDamage);
  }
}
