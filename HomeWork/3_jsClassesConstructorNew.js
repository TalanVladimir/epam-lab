// https://epam.sharepoint.com/sites/LMSO/Program/31840fb43b6e-8f14-ed4a-dde5-20ff7e7160cd/Classes,%20Constructor,%20new.pdf

class Vector {
  constructor(array) {
    this.array = array;
  }

  add(b) {
    const checkArray = b.array;
    const newArray = [];

    if (checkArray.length != this.array.length) {
      throw new Error("error");
    }
    for (let i = 0; i < checkArray.length; i++) {
      const newValue = this.array[i] + checkArray[i];
      newArray.push(newValue);
    }

    return JSON.stringify(new Vector(newArray));
  }

  subtract(b) {
    const checkArray = b.array;
    const newArray = [];

    if (checkArray.length != this.array.length) {
      throw new Error("error");
    }
    for (let i = 0; i < checkArray.length; i++) {
      const newValue = this.array[i] - checkArray[i];
      newArray.push(newValue);
    }
    return JSON.stringify(newArray);
  }

  dot(b) {
    const checkArray = b.array;
    const newArray = [];

    if (checkArray.length != this.array.length) {
      throw new Error("error");
    }
    for (let i = 0; i < checkArray.length; i++) {
      const newValue = `${this.array[i]}*${checkArray[i]}`;
      newArray.push(newValue);
    }
    const returnValue = newArray.join("+");
    return `${returnValue} = ${eval(returnValue)}`;
  }

  norm() {
    const checkArray = this.array;
    const newArray = [];
    let sum = 0;
    for (let i = 0; i < checkArray.length; i++) {
      const newValue = `${this.array[i]}^2`;
      sum += this.array[i] * this.array[i];
      newArray.push(newValue);
    }
    const returnValue = `${newArray.join("+")}`;
    console.log(sum);
    return `sqrt(${returnValue}) = ${sum}`;
  }

  toString() {}
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.clear();

console.log(`${a.add(b)} //	should return	a	new	Vector([4,	6,	8])`);
console.log(`${a.subtract(b)} //	should	return	a	new	Vector([-2,	-2,	-2])`);
console.log(`${a.dot(b)} //	should	return	1*3	+	2*4	+	3*5	=	26`);

console.log(`${a.norm()} //	should	return	sqrt(1^2	+	2^2	+	3^2)	=	sqrt(14)`);
console.log(`${a.add(c)} //	throws	an	error`);
