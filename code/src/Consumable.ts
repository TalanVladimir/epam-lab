import { Item } from './Item';

export class Consumable extends Item {
  consumed: boolean;
  spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
  }

  eat(): string {
    return 'eat';
  }

  use(): string {
    return 'use';
  }

  isConsumed(): boolean {
    return this.consumed;
  }

  setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  isSpoiled(): boolean {
    return this.spoiled;
  }

  toString(): string {
    return 'tooostring';
  }
}
