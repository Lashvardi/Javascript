// ! ფუნქციები

function addNumbers(num1, num2) {
    return num1 + num2;
}

let result = addNumbers(3, 4);
console.log(result); // გამოიტანს: 7


const multiplyNumbers = function(num1, num2) {
    return num1 * num2;
};
let result1 = multiplyNumbers(3, 4);
console.log(result); // Output: 12



const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
};

function greet(name, greetingFunction) {
    greetingFunction(name);
}

greet("Alice", sayHello);


function calculateGrade(score) {
    if (score >= 90) {
      return 5;
    } else if (score >= 80) {
      return 4;
    } else if (score >= 70) {
      return 3;
    } else if (score >= 60) {
      return 2;
    } else {
      return 1;
    }
  }
  
  const myScore = 85;
  const myGrade = calculateGrade(myScore);
console.log(`Chemi qula aris ${myScore} nishani ${myGrade}.`);
  

// function changeText() {
//     const element = document.getElementById("myElement");
//     element.textContent = "Hello, world!";
//   }
  
//   const button = document.getElementById("myButton");
// button.addEventListener("click", changeText);
  
let count = 0;

function incrementCount() {
  count++;
  const countElement = document.getElementById("count");
  countElement.textContent = count;
}

const button1 = document.getElementById("myButton");
button1.addEventListener("click", incrementCount);