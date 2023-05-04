// ! დავალების გარჩევა

// function TurnOnLights() {
//     document.getElementById("light1").src = "pic_bulbon.gif";
// }

// function TurnOffLights() {
//     document.getElementById("light1").src = "pic_bulboff.gif";
// }


// ! მათემატიკური ოპერატორები

// // * +
// console.log(`${x} + ${y} =  ${x + y}`);

// // * -
// console.log(`${x} - ${y} =  ${x - y}`);

// // * *
// console.log(`${x} * ${y} =  ${x * y}`);

// // * /
// console.log(`${x} / ${y} =  ${x / y}`);

// // * %
// console.log(`${x} % ${y} =  ${x % y}`);

// console.log();


// // * +=
// console.log(`${x} += ${y} =  ${(x += y)}`);

// // * -=
// console.log(`${x} -= ${y} =  ${(x -= y)}`);

// // * *=
// console.log(`${x} *= ${y} =  ${(x *= y)}`);

// // * /=
// console.log(`${x} /= ${y} =  ${(x /= y)}`);
    
// console.log(`${x} %= ${y} =  ${(x %= y)}`);


let x = 50;
let y = 25;
console.log(`${x} < ${y} =  ${x < y}`);
console.log(`${x} > ${y} =  ${x > y}`);
console.log(`${x} <= ${y} =  ${x <= y}`);
console.log(`${x} >= ${y} =  ${x >= y}`);
console.log(`${x} == ${y} =  ${x == y}`);
console.log(`${x} != ${y} =  ${x != y}`);
console.log(`${x} === ${y} =  ${x === y}`);
console.log(`${x} !== ${y} =  ${x !== y}`);


let text1 = "255";
let text2 = "25";
let result = text1 < text2;
console.log(result);


let text3 = "What a very ";
text3 += "nice day";
console.log(text3);

let x1 = 5 + 5;
let y1 = "5" + 5;
let z = "Hello" + 5;
console.log(z);


// ! If statement

let num1 = 10;
let num2 = 1;
// ? && (and) (და) ოპერატორი აუცილებელია რომ ორივე/მეტი პირობა შესრულდეს
if (num1 > num2 && num1 + num2 == 15) {
    console.log("Sum Is 15");
} else {
    console.log("Sum Is Not 15");
}

// ? || (or) (ან) ოპერატორი აუცილებელია რომ ერთი-ერთი პირობა შესრულდეს.

if (num1 > num2 || num1 + num2 == 15) {
    console.log("Or Operator");
} else {
    console.log("Else Statement");
}

// ! For Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const colors = ["red", "blue", "green", "yellow"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}