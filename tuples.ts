const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi: [string, boolean, number] = ['brown', true, 40];
//what makes this a tuple instead of just an array is that it has a distinct order to how its layed out in the array and you can't just go swapping data around

//then you can easily make it into a type alias like below, this is the same as above but shorter
type Drink = [string, boolean, number]; //type alias

const pepsi2: Drink =['brown', true, 40];
const sprite: Drink =['clear', true, 40];
const tea: Drink =['brown', false, 0];
//the above are also considered tuples since they are giving very specific information

const carSpecs: [number, number] = [400, 3354]; //not ideal when you have no idea what the numbers mean

const carStats = {  //better to go the JS obj route in those situations. so tuples aren't used often
  horsepower: 400,
  weight: 3354
};