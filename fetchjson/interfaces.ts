// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
//   summary(): string;
// }

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civiv',
  year: 2000,
  broken: true,
  summary(): string {
    return `$this.name`
  }
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `$this.color`
}}

const printSummary = (item: Reportable)
// printVehicle = (vehicle: Vehicle)
:void =>{
    console.log(item.summary());
    // (vehicle.summary());
};
printSummary(oldCivic);
// printVehicle(oldCivic);
printSummary(drink);
//making an interface allows us to avoid making a longggg list of types for vehicle on the left side
//interfaces allow us to call from more than one object if it has the same requirement ex. summary in this case