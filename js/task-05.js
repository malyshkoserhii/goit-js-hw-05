class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${mustang.maxSpeed}, speed: ${mustang.speed}, isOn: ${mustang.isOn}, distance: ${mustang.distance}, price: ${mustang.price}`,
    );
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
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
    if (this.isOn === true) {
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
