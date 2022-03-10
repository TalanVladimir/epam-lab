// https://epam.sharepoint.com/sites/LMSO/Program/318431993fe3-623b-5437-3e49-1f3ccd111cb5/Prototypes,%20Inheritance.pdf

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return 'My name is ' + this.name + ' and I am ' + this.age;
};

function myNew(prototype, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, prototype.prototype);
  obj.constructor.apply(obj, args);
  return obj;
}

var john = myNew(Person, 'John', 30); //- should	work	the	same	as: var	john	=		new	Person('John',	30);

// var john = new Person('John', 30);
var jack = new Person('Jack', 40);
console.log(john.introduce()); //	My	name	is	John	and	I	am	30
console.log(jack.introduce()); //	My	name	is	Jack	and	I	am	40
