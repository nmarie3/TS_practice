const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat:0,
    lng: 15
  },
  //using es2015 syntax for defining a method inside of an obj
  setAge(age: number):void {
    this.age=age;
  }
}

//below is what it looks like destructured
const {age, name}: {age:number; name: string} = profile;
const {coords: {lat, lng}}:{coords: {lat: number, lng: number}} = profile;