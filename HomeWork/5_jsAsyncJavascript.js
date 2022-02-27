// https://epam.sharepoint.com/sites/LMSO/Program/31849a106342-7d53-03bb-e38a-4a1fd9516cd0/Async%20Javascript.pdf

// Async	Javascript
// 1.	Write	your	own	Promise	class	with	syncThen	method.
// Example:

const MyPromise = class {
  constructor(callback) {
    this.promise = new Promise(callback);
  }
  then(fn) {
    this.promise.then(fn);
    return this;
  }
  synchThen(fn) {
    fn();
    return this;
  }
};

let promiseOne = new MyPromise((resolve) => {
  console.log(1);
  resolve();
})
  .synchThen(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });
console.log(4); //1,	2,	4,	3

// 2.	Write	ReversePromise	class	so	that	‘then’	functions	are	calling	from	the	end	to
// the	start.
// Example:

const ReversePromise = class {
  constructor(callback) {
    this.promise = new Promise(callback);
    this.stack = [];

    setTimeout(() => {
      while (this.stack.length) {
        this.promise.then(this.stack.pop());
      }
    }, 0);
  }

  then(fn) {
    this.stack.push(fn);
    return this;
  }
};

let promiceTwo = new ReversePromise((resolve) => {
  console.log(1);
  resolve();
})
  .then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => console.log(4)); //1,	4,	3,	2
