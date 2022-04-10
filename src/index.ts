import { State } from './types';

const defaultState: State = {
  shipmentId: 0,
  toAddress: '',
  fromAddress: '',
  toZipCode: '',
  fromZipCode: '',
  weight: 0,
  marks: [],
};

class Gui {
  state: State;
  constructor() {
    this.state = defaultState;
  }

  // on(eventType: string): void;

  // trigger(eventType: string, state: Shipment): any {}

  getState(): State {
    return this.state;
  }
}

class Client {
  constructor(gui: Gui) {}

  onShip(shipment: Shipment) {}
}

class Shipment {
  state: State;

  constructor(state: State) {
    this.state = state;
  }

  getShipmentId(): number {
    return this.state.shipmentId;
  }

  ship(): string {
    return 'ship';
  }
}

class Shipper {
  getCost() {}
}
