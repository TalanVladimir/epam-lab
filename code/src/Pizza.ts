import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number;
  constructor(numberOfSlices: number, spoiled: boolean) {
    super(null, null, null, spoiled);
    this.numberOfSlices = numberOfSlices;
  }

  eat(): string {
    return 'eat';
  }
}
