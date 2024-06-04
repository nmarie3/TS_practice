const add = (a: number, b:number): number => {  //a, b will be any type if not given annotations
  return a + b;
};
//the third "number" before the => sign is saying what the object must return while the other two "numbers" are saying what those values must be
//TS can also guess that the return is a number based on the previous annotations, but best to use a return annotation anyway to catch errors

const multiply = function(a: number, b: number): number {
  return a*b;
}


const logger = (message: string): void => { //returning nothing
  console.log(message);
};

const throwError = (message: string): string => { //returning nothing
  if (!message) {
    throw new Error(message);
  }
  return message;
};


const forcast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forcast: {date: Date, weather: string}): void => {
  console.log(forcast.date);
  console.log(forcast.weather);
};

//but then when you destructue it, it becomes
const logWeather2 = ({date, weather}: {date:Date, weather:string}): void =>{
  console.log(date);
  console.log(weather);
}

