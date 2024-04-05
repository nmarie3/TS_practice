const add = (a: number, b:number): number => {
  return a + b;
};
//the third "number" before the = sign is saying what the object must return while the other two "numbers" are saying what those values must be


const logWeather = (forcast: {date: Date, weather: string}): void => {
  console.log(forcast.date);
  console.log(forcast.weather);
};
//but then when you destructue it, it becomes
const logWeather2 = ({date, weather}: {date:Date, weather:string}): void =>{
  console.log(date);
  console.log(weather);
}

