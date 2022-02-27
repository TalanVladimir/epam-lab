import { Item } from './Item';
import { Comparator } from './Comparator';

export class ItemComparator implements Comparator<Item> {
  compare(first: Item, second: Item): number {
    return 1;
  }
}
