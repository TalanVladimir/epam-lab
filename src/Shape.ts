import { Point } from './Point';

export abstract class Shape {
  protected _color: string;
  protected _filled: boolean;
  points: Array<Point>;

  constructor(points: Array<Point>, color = 'green', filled = true) {
    if (points.length !== 3) throw new Error('bad');
    this.points = points;
    this._color = color;
    this._filled = filled;
  }

  toString(): string {
    let returnVal: string = `A Shape with color of ${this._color} and ${
      this._filled ? 'filled' : 'not filled'
    }. Points:`;
    for (let i = 0; i < this.points.length; i++) {
      returnVal +=
        i === this.points.length - 1
          ? ` (${this.points[i].x}, ${this.points[i].y})`
          : ` (${this.points[i].x}, ${this.points[i].y}),`;
    }
    returnVal += '.';
    return returnVal;
  }

  getPerimeter(): number {
    return (
      this.points[0].distance(this.points[1]) +
      this.points[1].distance(this.points[2]) +
      this.points[2].distance(this.points[0])
    );
  }

  abstract getType(): string;
}
