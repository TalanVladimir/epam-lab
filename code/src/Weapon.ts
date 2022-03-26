import { Item } from './Item';

export abstract class Weapon extends Item {
  MODIFIER_CHANGE_RATE: number = 0.05;
  baseDamage: number;
  damageModifier: number = this.MODIFIER_CHANGE_RATE;
  baseDurability: number;
  durabilityModifier: number = this.MODIFIER_CHANGE_RATE;

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
    if (this.getDurability() > 0) {
      let multiText = `You use the ${
        this.name
      } , dealing ${this.getDamage()} points of damage.`;

      this.setBaseDurability(
        this.getBaseDurability() - this.MODIFIER_CHANGE_RATE,
      );
      if (this.getDurability() <= 0) {
        multiText + '\nThe hammer breaks.';
      }
      return multiText;
    }
    return `You can't use the ${this.name} , it is broken.`;
  }

  toString(): string {
    return `${this.name} − Value: ${this.value}, Weight : ${
      this.weight
    } , Damage : ${this.getDamage()} , Durability : ${this.getDurability()}%”`;
  }

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
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
