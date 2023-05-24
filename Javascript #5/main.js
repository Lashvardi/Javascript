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
const bookTitles = wignebi.map((book) => book.year);
console.log(bookTitles);

const words = ["apple", "banana", "orange", "grape"];
const shortWords = words.filter((word) => word.length < 6);
console.log(shortWords); // Output: ['apple', 'grape']

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
