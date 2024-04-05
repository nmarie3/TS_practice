const apples: number = 5;
let spped: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
//when giving a type, just put it before the = sign
let now: Date = new Date();
//this one is a built in object
let colors: string[]=['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];
//and these are typing an array on the left side. the actual array is only the left
class Car {

}
  let car: Car = new Car();
//this is how you type classes and it's easy to tell since classes always are Capped
let point: {x:number; y: number} = {
  x: 10,
  y: 20
};
//this is object literal. you're assigning values to "point" but you're being specific in that it can only be an x and a y value that are numbers
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
//this is how you type functions, the "(i:number) => void" part only.