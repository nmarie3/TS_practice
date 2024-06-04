//type: easy way to refer to the different properties + functions that a value has

//primitive types: basics, ex. number, boolean, void, undefined, string, symbol, null
//object types: types we create, ex. functions, arrays, classes, objects

//type annotaion: code we add to tell typescript what type of value a variable will refer to - we tell TS the type
//type inference: typescript tries to figure out what type of value a variable refers to - TS guesses the type

//variable declaration         variable initialization
//const color             =       'red'
//if declaration and initialization are on the same line, TS will figure out the type of 'color' for us
//this is why sometimes we don't need to add an annotation when declaring a variable, ex. let apples = 5 <TS automatically knows its a number


//any type: a type, means that TS has no idea what it is - can't check for correct property references, and you want to avoid any variables at all costs

//type annotation for functions: code we add to tell TS what type of arguments a function will receive and what type of values it will return
//type inference for functions: TS tries to figure out what type of value a function will return

//typed array: arrays where each element is some consistent type of value

//tuple: array-like structure where each element represents some property of a record

//interface: creates a new type, describing the property names and value types of an object

//general strategy for reuseable code in TS
//1) create functions that accept arguements that are typed with interfaces
//2) objects/classes can decide to 'implement' a given interface to work with a function