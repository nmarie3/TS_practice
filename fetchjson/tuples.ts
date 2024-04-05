const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi: [string, boolean, number] = ['brown', true, 40];
//what makes this a tuple instead of just an array is that it has a distinct order to how its layed out in the array and you can't just go swapping data around

//then you can easily make it into a type alias like below
type Drink = [string, boolean, number];
const pepsi2: Drink =['brown', true, 40];
const sprite: Drink =['clear', true, 40];
const tea: Drink =['brown', false, 40];
//the above are also considered tuples since they are giving very specific information
