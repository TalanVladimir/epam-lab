// Typescript	Features
// 1.	Create	class,	which	extends	from	an	AbstractClass
// 2.	Apply	interfaces	to	class,	it's	method,	property
// 3.	Use	generics	there
// 4.	Analyze	transpiled	code	in	ES5	and	explain	it

interface AllItems {
  id: number;
  name: string;
  description: string;
  price: number;
}

class AbstractClass {
  abstract: boolean;

  constructor() {
    this.abstract = true;
  }
}

interface SelectedItems {
  name: any;
}

interface CustomClassType {
  _activeItem: SelectedItems[];
  addItem<T>(name: T): void;
  printItems(): void;
}

class CustomClass extends AbstractClass implements CustomClassType {
  _activeItem: SelectedItems[];

  constructor() {
    super();
    this.abstract = false;
    this._activeItem = [];
  }

  addItem<T>(name: T): void {
    this._activeItem.push({ name });
  }

  printItems() {
    return this._activeItem;
  }
}

const item = new CustomClass();
item.addItem('try');
item.addItem(0.123);
item.addItem(true);
item.addItem({ status: 'ready' });

console.log(item.printItems());
