// ! წინა დავალების გარჩევა

// for (let i = 1; i <= 100; i++) {
//   console.log(i)
// }


// for (let i = 100; i >= 1; i--) {
//   console.log(i)
// }





// for (let i = 1; i <= 6; i++) {
//   for (let j = 1; j <=6; j++) {
//     console.log(i,j)
//   }
// }

//TODO: დავალება  If ის გამოყენებით დაადგინეთ
//TODO:  ცვლადში მოცემული რიცხვი მეტია თუ არა 100 - ზე თუ მეტია შეამოწმოს არის თუარა ეს რიცხვი ლუწი;

// * თუ მეტია და არის ლუწი გამოიტანეთ "მეტია და ლუწია"
// * თუ მეტია და არის კენტი გამოიტანეთ "მეტია და კენტია"

// * თუ ნაკლებია და არის კენტი გამოიტანეთ "ნაკლებია და კენტია"
// * თუ ნაკლებია და არის ლუწი გამოიტანეთ "ნაკლებია და ლუწია"





// ! ფუნქციები
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }


// let result = addNumbers(25,25)
// console.log(result);



// multiplyNumbers = function(num1, num2) {
//     return num1 * num2;
// };

// let result1 = multiplyNumbers(3, 4);
// console.log(result1);



// function sayHello(name) {
//     console.log(`Hello ${name}!`);
// }

// sayHello("Demetre");



// function calculateGrade(score) {
//     if (score >= 90) {
//       return 5;
//     } else if (score >= 80) {
//       return 4;
//     } else if (score >= 70) {
//       return 3;
//     } else if (score >= 60) {
//       return 2;
//     } else {
//       return 1;
//     }
// }
  
// const myScore = 35;
// const myGrade = calculateGrade(myScore);

// console.log(`Chemi qula aris ${myScore} nishani ${myGrade}.`);
  

// function changeText() {
//   const element = document.getElementById("myTest");    
//   element.innerText = "გამარჯობა მსოფლიო";
// }
  
// const button = document.getElementById("myTestButton");
// button.addEventListener("click", changeText);
  


let count = 0;

function incrementCount() {
  count++;
  const countElement = document.getElementById("count");
  countElement.innerText = count;
}

const button1 = document.getElementById("myButton");
button1.addEventListener("click", incrementCount);





// ! დავალება ნახე ლინკი
// ? https://media.geeksforgeeks.org/wp-content/uploads/20210213184727/incredecreOutput.gif
