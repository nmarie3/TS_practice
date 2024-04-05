class Vehicle {
  drive(): void {
    console.log('train sounds')
  }
  honk(): void {
    console.log('beep')
  }
}
//what extend does is takes all the info from class Vehicle
//above and move it into class Car below
class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

// const vehicle = new Vehicle();
//which then can change the above to below now
const car = new Car();
car.drive();
car.honk();
// vehicle.drive();
// vehicle.honk();

//if any methods are labeled as private,
//it cannot be called outside of the class it's in.
//only methods inside the same class can call the function

//the only reason for making something private is just to
//restrict really complicated methods from being used incorrectly.
//has nothing to do with security