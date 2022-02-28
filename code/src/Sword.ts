import { Weapon } from './Weapon';

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number,
  ) {
    super('', baseDamage, baseDurability, value, weight);
  }
}
