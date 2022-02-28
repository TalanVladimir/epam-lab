import { Item } from './Item';

export class Weapon extends Item {
  MODIFIER_CHANGE_RATE: number = 0.05;
  baseDamage: number;
  damageModifier: number = 0;
  baseDurability: number;
  durabilityModifier: number = 0;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number,
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  polish(): void {}

  use(): string {
    return 'use something';
  }

  toString(): string {
    return 'yeah';
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
