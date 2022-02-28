import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item): number {
    return 1;
    // your code goes here
  }
}
