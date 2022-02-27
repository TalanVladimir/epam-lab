export class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  distance(x: number | Point, y: number = 0): number {
    let returnNumber: number = 0;
    if (typeof x !== 'object') {
      if (isNaN(x)) x = 0;
      returnNumber = Math.sqrt(
        (this.x - x) * (this.x - x) + (this.y - y) * (this.y - y),
      );
    } else
      returnNumber = Math.sqrt(
        (this.x - x.x) * (this.x - x.x) + (this.y - x.y) * (this.y - x.y),
      );
    return Math.round(returnNumber);
  }
}
