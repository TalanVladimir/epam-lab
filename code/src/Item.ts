import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
  id: number;
  value: number;
  name: string;
  weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.weight = weight;

    ++id;
  }

  public use(): void {}

  public compareTo(other: Item): number {
    return 0;
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

  static reset(): void {}
}
