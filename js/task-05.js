class Car {
  static getSpecs(car) {
    console.log(car);
  }

  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.speed = 0;
    this.isOn = false;
  }

  accelerate(value) {
    if (value < this.maxSpeed) {
      this.speed = value;
    }
  }

  decelerate(value) {
    if (value > 0 && this.speed > 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      const currentDistance = hours * this.speed;
      this.distance += currentDistance;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);