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
  gui;

  constructor(gui: Gui) {
    this.gui = gui;
  }

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

  ship(state: State) {
    if (state.weight < 15) {
      return this.Letter();
    } else if (state.weight <= 160) {
      return this.Package();
    } else {
      return this.Oversize();
    }
  }

  Letter() {}

  Package() {}

  Oversize() {}
}

class Shipper {
  state: State;
  price: number;

  constructor(state: State) {
    this.state = state;
  }

  getCost(state: State) {
    if (state.fromZipCode.length > 0) {
      const zipStart = parseFloat(state.fromZipCode.toString().substring(0, 1));
      if ([4, 5, 6].includes(zipStart)) {
        this.PacificParcelShipper();
      } else if ([7, 8, 9].includes(zipStart)) {
        this.ChicagoSprintShipper();
      } else {
        this.AirEastShipper();
      }
    }
  }

  AirEastShipper() {
    console.log('Air East');
    this.price = 0.39;
    return false;
  }

  PacificParcelShipper() {
    console.log('Pacific Parcel');
    this.price = 0.51;
    return false;
  }

  ChicagoSprintShipper() {
    console.log('Chicago Sprint');
    this.price = 0.42;
    return false;
  }
}
