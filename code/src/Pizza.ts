import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number = 0;
  constructor(numberOfSlices: number, spoiled: boolean) {
    super('Pizza', 0, 0, spoiled);
    this.numberOfSlices = numberOfSlices;
  }

  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.consumed = true;
      }
      if (this.spoiled) return `You eat the ${this.name}.`;
      else return `You eat the ${this.name}. \nYou feel sick.`;
    } else {
      return `There is nothing left of the ${this.name} to consume.`;
    }
  }
}
