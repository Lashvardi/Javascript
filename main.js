// ! წინა დავალების გარჩევა

for (let i = 1; i <= 100; i++) {
  console.log(i)  
}


for (let i = 100; i <= 1; i--) {
  console.log(i)  
}


for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <=6; j++) {
    console.log(i,j)
  }  
}



// ! ფუნქციები
function addNumbers(num1, num2) {
    return num1 + num2;
}


let result = addNumbers(25,25)
console.log(result);



const multiplyNumbers = function(num1, num2) {
    return num1 * num2;
};

let result1 = multiplyNumbers(3, 4);
console.log(result);





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
  
const myScore = 35;
const myGrade = calculateGrade(myScore);

console.log(`Chemi qula aris ${myScore} nishani ${myGrade}.`);
  

// function changeText() {
//   const element = document.getElementById("myTest");    
//   element.textContent = "გამარჯობა მსოფლიო";
// }
  
// const button = document.getElementById("myTestButton");
// button.addEventListener("click", changeText);
  


let count = 0;

function incrementCount() {
  count++;
  const countElement = document.getElementById("count");
  countElement.textContent = count;
}

const button1 = document.getElementById("myButton");
button1.addEventListener("click", incrementCount);



let kvirisDge = 3;

switch (kvirisDge) {
  case 1:
    console.log('Today is Monday.');
    break;
  case 2:
    console.log('Today is Tuesday.');
    break;
  case 3:
    console.log('Today is Wednesday.');
    break;
  case 4:
    console.log('Today is Thursday.');
    break;
  case 5:
    console.log('Today is Friday.');
    break;
  default:
    console.log('Today is the weekend.');
}



// ! დავალება ერთი ნახე ლინკი
// ? https://media.geeksforgeeks.org/wp-content/uploads/20210213184727/incredecreOutput.gif

// ! დავალება ორი
// ? გავაკეთოთ კალკულატორი გამოვიყენოთ HTML,Css,JS
// ? რთული დავალება შედარებით
// ? სადაც იქნება ორი ინფუთ Input ი
// ? და ერთი ელემენტი სადაც შედეგს გამოვიტანთ
// ? ჩვენი ინფუთებიდან მივიღებთ .Value ს

// * შეეცადე გაალამაზო ეს ყველაფერი

//? დავწეროთ ფუნქციები ღილაკებისთვის

// * მიმატება
// * გამოკლება
// * გამრავლება
// * გაყოფა

// * ფუნქციის შესრულებისას უნდა გამოიტანოს შედეგი ელემენტში