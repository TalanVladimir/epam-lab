export interface iModel {}

export interface iView {
  app: Element | null;

  createElement(tag: string, className?: string | null): Element;
}

export interface iController {
  model: iModel;
  view: iView;
}
