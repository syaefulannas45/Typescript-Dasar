abstract class Vehicle {
  abstract wheels: number;
  start(): void {
    console.log("avanza");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class motorCycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
car.wheels;
car.start();

let motor = new motorCycle();

console.log({ mottor: motor.wheels, cars: car.wheels });



