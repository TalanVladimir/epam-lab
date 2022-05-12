export interface iCurrency {
  from: 'Euro';
  to: string;
  rate: number;
  fromValue: number;
  toValue: number;
}

export interface iModel {
  items: iCurrency[];
}

export interface iView {
  app: Element | null;
  updateItems(items: iCurrency[]): void;
}

export interface iController {
  model: iModel;
  view: iView;
}
