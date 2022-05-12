import { iCurrency, iModel } from './types';

const defaultArray: iCurrency[] = [
  { from: 'Euro', to: 'USD', rate: 1.0408, fromValue: 100, toValue: 1 },
  { from: 'Euro', to: 'JPY', rate: 133.85, fromValue: 100, toValue: 1 },
  { from: 'Euro', to: 'BGN', rate: 1.9558, fromValue: 100, toValue: 1 },
  { from: 'Euro', to: 'CZK', rate: 24.925, fromValue: 100, toValue: 1 },
  { from: 'Euro', to: 'DKK', rate: 7.4413, fromValue: 100, toValue: 1 },
];

export class Model implements iModel {
  items: iCurrency[];
  constructor(items = defaultArray) {
    this.items = items;
  }
}
