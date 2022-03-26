import { Item } from './Item';
import { ItemComparator } from './ItemComparator';
import { ItemWeightComparator } from './ItemWeightComparator';

export class Inventory implements ItemComparator {
  items: Item[] = [];

  constructor() {}

  addItem(item: Item): void {
    this.items.push(item);
  }

  sort(comparator: ItemComparator = new ItemWeightComparator()): void {}

  toString(): string {
    let itemsList = '';
    for (let i = 0; i < this.items.length; i++) {
      if (i == 0) itemsList = this.items[i].name;
      else itemsList = `, ${this.items[i].name}`;
    }
    return itemsList;
  }

  compare(first: Item, second: Item): number {
    throw new Error('Method not implemented.');
  }
}
