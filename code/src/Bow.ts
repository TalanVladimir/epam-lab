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

  polish(): void {}
}
