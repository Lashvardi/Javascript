const numbers = [1, 2, 3, 4, 5];
const kvadratuliRicxvebi = numbers.map((cifri) => cifri * cifri);
console.log(kvadratuliRicxvebi); // Output: [1, 4, 9, 16, 25]

const numbers1 = [1, 2, 3, 4, 5, 6];
const luwebi = numbers1.filter((num) => num % 2 != 0);
console.log(luwebi); // Output: [2, 4]

const wignebi = [
  { title: "Harry Potter", author: "J.K. Rowling", year: 1997 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];
const bookTitles1 = wignebi.map((book) => book.year);
console.log(bookTitles);

const words1 = ["apple", "banana", "orange", "grape"];
const shortWords1 = words.filter((word) => word.length < 6);
console.log(shortWords); // Output: ['apple', 'grape']



const bookTitles = books.map(book => book.title);
console.log(bookTitles); // Output: ['Harry Potter', 'To Kill a Mockingbird', '1984']
  

const words = ['apple', 'banana', 'orange', 'grape'];
const shortWords = words.filter(word => word.length < 6);
console.log(shortWords); // Output: ['apple', 'grape']

const books = [
  { title: 'Harry Potter', author: 'J.K. Rowling', price: 200 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 150 },
  { title: '1984', author: 'George Orwell', price: 100 }
];
const Cheapbooks = books.filter(book => book.price / 12 <= 10);
console.log(Cheapbooks)



const numbers3 = [1, 2, 3, 4, 5];
const numberStrings = numbers3.map((num) => num.toString());
console.log(numberStrings); // Output: ['1', '2', '3', '4', '5']

// ! Map()
// ? ჯავასკრიპტში Map() მეთოდი იღებს რაღაც წესს რასაც მოერგება შემდეგ ყველა ელემენტს გადაუვლის და დაგვიბრუნებს
// ? ამ წესსზე მორგებულ ახალ მასივს

//! Filter()
//? ჯავასკრიპტში Filter() მეთოდი ქმნის ახალ Arrays რომელიც აკმაყოფილებს ჩვენს მიერ გადაცემულ წესს

//! Javascript Math()
//? ხარისხად
const xarisxi = Math.pow(2, 6);
console.log(xarisxi); // Output: 8

//? ფესვი
const fesvi = Math.sqrt(190);
console.log(fesvi); // Output: 8

const dadebiti = Math.abs(-4.7);
console.log(dadebiti); // Output: 4.7

const maximumi = Math.max(0, 150, 30, 20, -8, -200, 1000);
console.log(maximumi); // Output: 150

const minimumi = Math.min(0, 150, 30, 20, -8, -200);
console.log(minimumi); // Output: -200

const random = Math.random();
console.log(random); // Output: 0.9362944283730668


let num = 5.56789;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));







// რანდომ
var randomNumber = Math.random();
var flooredNumber = Math.floor(randomNumber * 10)
console.log(flooredNumber);


let RandomDiv = document.querySelector("#random_div");

var colors = ["red", "blue", "green", "yellow", "orange"];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

RandomDiv.style = `background-color: ${randomColor}` 
console.log(randomColor);



function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

var randomFloat = getRandomFloat(1.5, 4.5);
console.log(randomFloat);






//dates
const currentDate = new Date();
console.log(currentDate);


const specificDate = new Date('2023-05-24T12:00:00');
console.log(specificDate);


const date1 = new Date();
const year = date1.getFullYear();
const month = date1.getMonth(); // Month is zero-based (0-11)
const day = date1.getDate();
const hour = date1.getHours();
const minute = date1.getMinutes();
const second = date1.getSeconds();

console.log(year, month, day, hour, minute, second);


const date = new Date();
date.setDate(date.getDate() + 7); // Adds 7 days
console.log(date);

const gasvlis_tarigi = new Date('2023-05-31T17:57:28.635Z');
const gasvlis_tarigis_dge = gasvlis_tarigi.getDate();

const axlandeli_tarigi = new Date();
const axlandeli_tarigis_dge = axlandeli_tarigi.getDate()
console.log(gasvlis_tarigis_dge - axlandeli_tarigis_dge);



function formatTime(date) {
  const year = String(date.getFullYear());
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds());
  
  return `Weli${year} / / /${hours}:${minutes}:${seconds}`;
}

const currentDate1 = new Date();
const formattedTime = formatTime(currentDate1);
console.log(formattedTime);


