import { Weapon } from './Weapon';

export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number,
  ) {
    super('Bow', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    let newDurability = this.getBaseDurability() + this.MODIFIER_CHANGE_RATE;
    if (newDurability > 1) newDurability = 1;
    this.setBaseDurability(newDurability);
  }
}
