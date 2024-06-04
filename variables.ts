//even if it's using "let" it can't be reassigned a new value unless it's the same type
const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
//when giving a type, just put it before the = sign
let now: Date = new Date(); //built-in obj
//arrays
let colors: string[]=['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];
//and these are typing an array on the left side. the actual array is only the left

//classes
class Car {

}
  let car: Car = new Car(); //refering to type class Car
//this is how you type classes and it's easy to tell since classes always are Capped
let point: {x:number; y: number} = {
  x: 10,
  y: 20
};
//this is object literal. you're assigning values to "point" but you're being specific in that it can only be an x and a y value that are numbers
const logNumber: (i: number) => void = (i: number) => {  //takets an argument of number but returns nothing "void",
  //annotation is only the part before = sign, it is not a function
  console.log(i);  
};
//this is how you type functions, the "(i:number) => void" part only.

//when to use annotations
//1)funtion that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); //TS reads coordinates as 'any' type
console.log(coordinates); //{x: 10, y: 20};
//you can fix it by this
const coordinatesFixed: {x: number, y: number} = JSON.parse(json); 

//2)when we declare a variable on one line and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord; //need to add type boolean here

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

//3)variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false; //this causes error below
//you can fix the below error by this
let numberAboveZeroFixed: boolean | number = false; //saying it will be boolean or a number type

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    //numberAboveZero = numbers[i]; //won't work because it was given a boolean type above
  } 
}
