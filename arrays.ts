const carMakers = ['ford', 'toyota', 'chevy'];
//you'll want an annotation especiall if it:s an empty array
const carMakers2: string[] = [] //as such


const dates = [new Date(), new Date()];

const carsByMake: string[][] = []; //an array that contains an array that returns an array
//this annotation above is used for stuff like this
const carsByMake2 = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//help with inference when extracting values
const cars = carMakers[0]; //TS know car is a string because carMakers is a string
const myCar = carMakers.pop(); //TS can tell that myCar will be a string because carMakers is string

//prevent incompatiable values
//carMakers.push(100); //will get error because it know array should be strings not numbers

//help with map
carMakers.map((car: string): string=> { //TS will give auto complete based on car being a string
    return car.toUpperCase(); //the upperCase this is auto completed since its a property of strings
})

//flexable types
//you can make types flexable inside an array by adding an or statement
const importantDates: (Date | string)[] = [new Date()]; //new Date can take a date obj or string

//use typed arrays whenever you need to represent a collection of records with some arbitary sort order