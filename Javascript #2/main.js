
// ! დავალების გარჩევა

// function TurnOnLights() {
//     document.getElementById("light1").src = "pic_bulbon.gif";
// }

// function TurnOffLights() {
//     document.getElementById("light1").src = "pic_bulboff.gif";
// }

// ! ცვლადები

// ? var ცვლადი
var x = 5;
var y = 6;
var z = x + y;

// * var არის ცვლადის გამოცხადების ყველაზე ძველი საშუალება.
// * var დღესდღეობით ჩაანცავლა let და const მა

// ? let ცვლადი
let a = 11;
let b = 25;

let sum = a + b;


// ! Const
const constantNum = 5;
constantNum = 8;
console.log(num1);

// ! Array

let cars = ["BMW", "Volvo", "Mini"];

//* Array (მასივი) არის ცვლადი რომელიც შეიცავს რამოდენიმე ნებისმიერი ტიპის ელემენტს.
//? მაგ: let cars = ["BMW", "Volvo", "Mini"]; 
//? მაგ: let elements = [1, "Hello", false];

// ? თითოეული ელემენტი დგას ინდექსზე (ინდექსი იწყება 0-დან)
// * მანქანების შემთვევაში BMW - 0, Volvo - 1, Mini - 2

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

// ! Math Floor, Ceil, Round
let FloorNumber = Math.floor(4.7);
console.log(FloorNumber);

let CeilNumber = Math.ceil(4.4);
console.log(CeilNumber);

let RoundNumber = Math.round(4.3);
console.log(RoundNumber);

// * Floor (იატაკი) დაამრგვალებს უდაბლეს მთელ რიცხვთან

// * Ceil (ჭერი) დაამრგვალებს უდაბლეს მთელ რიცხვთან

// * Round (მრგვალი) დაამრგვალებს მათემატიკურად


// ! Random
let x = Math.floor((Math.random() * 10) + 1);
console.log(x);

// * + 1 საჭიროა იმისთვის რომ 0 არ დაარენდომოს


// ! If statement
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}else{
    console.log("You are not an adult");
}



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


for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ! for loop
let arr = [10,20,30,40,50,60];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// ! while loop
let num13 = 5;

while(num1 < 10){
    console.log(num1);
    num1++;
}


let num23 = 5;

while(num2 < 10 && num2 >= 0){
    console.log(num2);
    num2--;
}


let q1 =5
let z1 = 10;


if(q == 5 || z == 10){
    console.log("სწორია");
}else{
    console.log("არასწორია");
}


// ? სხვაობა Var/Let შორის
// ! მათ შორის სხვაობა
// // ? Let ის მაგალითი
// function Difference() {
//     let message = "Hello, world!";
//     console.log(message); // გამოიტანს "Hello, world!"
  
//     if (true) {
//       let message = "Goodbye, world!";
//       console.log(message); // გამოიტანს "Goodbye, world!"
//     }
  
//     console.log(message); // გამოიტანს "Hello, world!"
// }
// Difference()

// ? Var ის მაგალითი
// function Difference() {
//     var message = "Hello, world!";
//     console.log(message); // გამოიტანს "Hello, world!"
  
//     if (true) {
//         var message = "Goodbye, world!";
//       console.log(message); // გამოიტანს "Goodbye, world!"
//     }
  
//     console.log(message); // გამოიტანს "Goodbye, world!"
// }
// Difference()

//Todo: დავალება  For Loop ის გამოყენებით დაბეჭდეთ რიცხვები 1-დან 100-მდე ანუ დაბეჭდეთ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15...100;
//Todo: დავალება  For Loop ის გამოყენებით დაბეჭდეთ რიცხვები 1-დან 100-მდე ანუ დაბეჭდეთ 100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85...1;
//TODO: დავალება  If ის გამოყენებით დაადგინეთ ცვლადში მოცემული რიცხვი მეტია თუ არა 100 -ზე თუ მეტია შეამოწმოს არის თუარა ეს რიცხვი ლუწი;

// * თუ მეტია და არის ლუწი გამოიტანეთ "მეტია და ლუწია"
// * თუ მეტია და არის კენტი გამოიტანეთ "მეტია და კენტია"

// * თუ ნაკლებია და არის კენტი გამოიტანეთ "ნაკლებია და კენტია"
// * თუ ნაკლებია და არის ლუწი გამოიტანეთ "ნაკლებია და ლუწია"

// let number = 105;

// if(number > 100){
//     if(number % 2 == 0){
//         console.log("მეტია და ლუწია");
//     }else{
//         console.log("მეტია და კენტია");
//     }
// }else if(number < 100){
//     if(number % 2 == 1){
//         console.log("ნაკლებია და კენტია");
//     }else{
//         console.log("ნაკლებია და ლუწია");
//     }
// }