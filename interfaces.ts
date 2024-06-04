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
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string { //returns a string
    return `$this.name`
  }
}

//interface made to fix below issue, then the oldCivic object values must match the typpes in here
// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
//   summary(): string;
// } //commented out for new Reportable interface

//this is too long and would need to be repeated, so best to make an interface in this situation (above)
//const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
//fix with
//const printVehicle = (vehicle: Vehicle): void => {
  // console.log(`Name: ${vehicle.name}`); //no longer need with summary
  // console.log(`Name: ${vehicle.year}`); //no longer need with summary
  // console.log(`Name: ${vehicle.broken}`); //no longer need with summary
  //console.log(vehicle.summary());
//};

//below is edits for using the Reportable interface
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);


//drink2 also works with interface Reportable since the only requirement for both is the summary variable and it must be satisfied to use
const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `$this.color`
}}

printSummary(drink2);
//making an interface allows us to avoid making a longggg list of types for vehicle on the left side
//interfaces allow us to call from more than one object if it has the same requirement ex. summary in this case