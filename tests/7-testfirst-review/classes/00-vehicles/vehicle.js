/* eslint-disable no-unused-vars */
class Vehicle {
  constructor(specs) {
    this.wheelTotal = specs[0];
    this.energySource = specs[1];
    this.manufacturer = specs[2];
    this.isOn = false;
  }

  getSpec(key) {
    if (Object.keys(this).includes(key)) {
      return this[key];
    }
  }
}

class Tesla extends Vehicle {
  constructor(specs) {
    super(specs[4][0]);
    this.milesPerCharge = specs[0];
    this.model = specs[1];
    this.chargePercentage = specs[2];
    this.minutesToCharge = specs[3];
  }

  minutesToFullCharge() {
    return `${100 - this.chargePercentage} minutes until the charge is full!`;
  }
}
