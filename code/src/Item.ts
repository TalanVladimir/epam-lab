import { Comparable } from './Comparable';

let currentId = 0;

export abstract class Item implements Comparable<Item> {
  id: number;
  value: number;
  name: string;
  weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = currentId;
    this.name = name;
    this.value = value;
    this.weight = weight;

    ++currentId;
  }

  public use(): void {}

  public compareTo(other: Item): number {
    if (this.value < other.value) return -1;
    else if (this.value > other.value) return 1;
    else {
      const currentValue = this.name.toLowerCase();
      const otherValue = other.name.toLowerCase();
      if (currentValue < otherValue) return -1;
      else if (currentValue > otherValue) return 1;
      else return 0;
    }
  }

  public toString(item: Item): string {
    return `${item.name} - Value: ${item.value}, Weight: ${item.weight}`;
  }

  getId(): number {
    return this.id;
  }

  getValue(): number {
    return this.value;
  }

  getName(): string {
    return this.name;
  }

  getWeight(): number {
    return this.weight;
  }

  setValue(price: number): void {
    this.value = price;
  }

  setName(name: string): void {
    this.name = name;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }

  static reset(): void {
    currentId = 0;
  }
}
