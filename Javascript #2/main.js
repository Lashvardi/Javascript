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


for (let i = 10; i >= 1; i--) {
    console.log(i);
}


  // ! for loop
let arr = [10,20,30,40,50,60];

for (let i = 0; i < arr.length; i++) {
    console.log(i);
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


//Todo: დავალება  For Loop ის გამოყენებით დაბეჭდეთ რიცხვები 1-დან 100-მდე ანუ დაბეჭდეთ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15...100;
//Todo: დავალება  For Loop ის გამოყენებით დაბეჭდეთ რიცხვები 1-დან 100-მდე ანუ დაბეჭდეთ 100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85...1;
//Todo: დავალება For Loop ის გამოყენებით დაბეჭდეთ კამათლის ყველა შესაძლო ვარიაცია (სულ 36 ვარიანტი);
// ! მესამე დავალების მინიშნება გამოიყენეთ 2 For loop (Nested For Loop);