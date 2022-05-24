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

  onShip(shipment: Shipment) {
    return new Shipment(this.gui.state);
  }
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
      return new Letter();
    } else if (state.weight <= 160) {
      return new Package();
    } else {
      return new Oversize();
    }
  }
}

class Letter {}

class Package {}

class Oversize {}

class Shipper {
  state: State;
  price: number;

  constructor(state: State) {
    this.state = state;
  }

  getCost(state: State) {
    if (state.fromZipCode.length > 0) {
      const zipStart = parseFloat(state.fromZipCode.substring(0, 1));
      if ([4, 5, 6].includes(zipStart)) {
        return new PacificParcelShipper(state);
      } else if ([7, 8, 9].includes(zipStart)) {
        return new ChicagoSprintShipper(state);
      } else {
        return new AirEastShipper(state);
      }
    }
  }
}

class AirEastShipper extends Shipper {
  super(state: State) {
    this.super(state);
    this.price = 0.39;
  }
}

class PacificParcelShipper extends Shipper {
  super(state: State) {
    this.super(state);
    this.price = 0.51;
  }
}

class ChicagoSprintShipper extends Shipper {
  super(state: State) {
    this.super(state);
    this.price = 0.42;
  }
}
