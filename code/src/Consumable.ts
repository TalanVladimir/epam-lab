import { Item } from './Item';

export abstract class Consumable extends Item {
  consumed: boolean = false;
  spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
  }

  eat(): string {
    if (this.spoiled && this.consumed) {
      return this.use();
    }
    return '';
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
