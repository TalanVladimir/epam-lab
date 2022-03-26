import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
  constructor(...points: Array<Point>) {
    super(points);
  }

  toString(): string {
    return `Triangle[v1=(${this.points[0].x}, ${this.points[0].y}),v2=(${this.points[1].x}, ${this.points[1].y}),v3=(${this.points[2].x}, ${this.points[2].y})]`;
  }

  getType(): string {
    const a = Math.round(this.points[0].distance(this.points[1]));
    const b = Math.round(this.points[1].distance(this.points[2]));
    const c = Math.round(this.points[2].distance(this.points[0]));
    console.log(`${a} - ${b} - ${c}`);
    if (a !== b && b !== c && c !== a) return 'isosceles triangle';
    else if (a === b && b === c && c === a) return 'equilateral triangle';
    else return 'scalene triangle';
  }
}
