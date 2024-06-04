const today = new Date();
today.getMonth();
//typescript automatically knows the features of this function

const person = {
    age: 20
};
//typescript understands this has the properties of numbers automatically, anything else will error

class Color {

}
const red = new Color(); //typescript knows that this points to a class called Color, anything different from that class will error
