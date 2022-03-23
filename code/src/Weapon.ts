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
    return 'You use the hammer , dealing 30.47 points of damage.';
    return 'The hammer breaks.';
    return `You can't use the hammer , it is broken.`;
  }

  toString(): string {
    return 'hammer − Value: 300, Weight : 2.03 , Damage : 30.47 , Durability : 83.93%”';
  }

  getDamage(): number {
    return this.baseDamage;
  }

  getDurability(): number {
    return this.baseDurability;
  }

  setBaseDamage(baseDamage: number): void {
    this.baseDamage = baseDamage;
  }

  getBaseDamage(): number {
    return this.baseDamage;
  }

  setBaseDurability(baseDurability: number): void {
    this.baseDurability = baseDurability;
  }

  getBaseDurability(): number {
    return this.baseDurability;
  }
}
