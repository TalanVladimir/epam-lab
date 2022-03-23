import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number = 0;
  constructor(numberOfSlices: number, spoiled: boolean) {
    super('Pizza', 0, 0, spoiled);
    this.numberOfSlices = numberOfSlices;
  }

  eat(): string {
    return 'eat';
  }
}
