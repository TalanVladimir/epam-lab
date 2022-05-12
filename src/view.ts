import { iCurrency, iView } from './types';

export class View implements iView {
  app: Element | null;
  radioM1: Element;
  labelM1: Element;
  radioM2: Element;
  labelM2: Element;
  group1: Element;

  radioI1: Element;
  labelI1: Element;
  radioI2: Element;
  labelI2: Element;
  group2: Element;

  list: Element;

  constructor() {
    this.app = this.getElement('#root');

    this.radioM1 = this.createRadio('m1', 'mode');
    this.labelM1 = this.createLabel('m1', 'Same Value');
    this.radioM2 = this.createRadio('m2', 'mode');
    this.labelM2 = this.createLabel('m2', 'Different Value');

    this.group1 = this.createElement('fieldset');
    this.group1.append(this.radioM1, this.labelM1, this.radioM2, this.labelM2);

    this.radioI1 = this.createRadio('i1', 'input');
    this.labelI1 = this.createLabel('i1', 'Input Fields');
    this.radioI2 = this.createRadio('i2', 'input');
    this.labelI2 = this.createLabel('i2', 'Sliders');

    this.group2 = this.createElement('fieldset');
    this.group2.append(this.radioI1, this.labelI1, this.radioI2, this.labelI2);

    this.radioM1.setAttribute('checked', 'true');
    this.radioI1.setAttribute('checked', 'true');

    this.list = this.createElement('div', 'list');

    if (this.app !== null) this.app.append(this.group1, this.group2, this.list);
  }

  private addItem(item: iCurrency): Element {
    item.toValue = item.fromValue * item.rate;

    const titleLeft = this.createLabel('', `1 ${item.from} is`);
    const titleInput = this.createInput(item.rate);
    const titleRight = this.createLabel('', item.to);
    const titleDiv = this.createElement('div', 'write');
    titleDiv.append(titleLeft, titleInput, titleRight);

    const leftLabel = this.createLabel('left', item.from);
    const leftInput = this.createInput(item.fromValue);
    const leftDiv = this.createElement('div', 'left');
    leftDiv.append(leftLabel, leftInput);

    const rightLabel = this.createLabel('left', item.to);
    const rightInput = this.createInput(item.toValue);
    const rightDiv = this.createElement('div', 'right');
    rightDiv.append(rightLabel, rightInput);

    const middleDiv = this.createElement('div', 'middle');
    middleDiv.append(leftDiv, rightDiv);

    const table = this.createElement('div', 'table');
    table.append(titleDiv, middleDiv);
    return table;
  }

  updateItems(items: iCurrency[]): void {
    this.list.textContent = '';

    items.forEach(item => {
      this.list.append(this.addItem(item));
    });
  }

  private createInput(value: number): Element {
    const element = document.createElement('input');
    element.value = value.toString();

    return element;
  }

  private createElement(tag: string, className?: string | null): Element {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  private createRadio(id: string, name: string): Element {
    const element = document.createElement('input');
    element.id = id;
    element.type = 'radio';
    element.name = name;

    return element;
  }

  private createLabel(id: string, text: string): Element {
    const element = document.createElement('label');
    element.setAttribute('for', id);
    element.textContent = text;

    return element;
  }

  getElement(selector: string): Element | null {
    const element = document.querySelector(selector);

    return element;
  }
}
