import { iModel, iView, iController } from './types';

export class Controller implements iController {
  model: iModel;
  view: iView;

  constructor(model: iModel, view: iView) {
    this.model = model;
    this.view = view;
  }
}
