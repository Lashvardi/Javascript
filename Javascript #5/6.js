const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


const books = [
    { title: 'Harry Potter', author: 'J.K. Rowling' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' }
  ];
const bookTitles = books.map(book => book.title);
console.log(bookTitles); // Output: ['Harry Potter', 'To Kill a Mockingbird', '1984']
  

const words = ['apple', 'banana', 'orange', 'grape'];
const shortWords = words.filter(word => word.length < 6);
console.log(shortWords); // Output: ['apple', 'grape']


const numbers3 = [1, 2, 3, 4, 5];
const numberStrings = numbers3.map(num => num.toString());
console.log(numberStrings); // Output: ['1', '2', '3', '4', '5']


// ! Map()
// ? ჯავასკრიპტში Map() მეთოდი იღებს რაღაც წესს რასაც მოერგება შემდეგ ყველა ელემენტს გადაუვლის და დაგვიბრუნებს
// ? ამ წესსზე მორგებულ ახალ მასივს

//! Filter()
//? ჯავასკრიპტში Filter() მეთოდი ქმნის ახალ Arrays რომელიც აკმაყოფილებს ჩვენს მიერ გადაცემულ წესს



//! Javascript Math()


//? ხარისხად
const xarisxi = Math.pow(2, 3);
console.log(xarisxi); // Output: 8



//? ფესვი
const fesvi = Math.sqrt(64);
console.log(fesvi); // Output: 8

const dadebiti = Math.abs(-4.7);
console.log(dadebiti); // Output: 4.7


const maximumi = Matn.max(0, 150, 30, 20, -8, -200);
console.log(maximumi); // Output: 150


const minimumi = Math.min(0, 150, 30, 20, -8, -200);
console.log(minimumi); // Output: -200


const random = Math.random();
console.log(random); // Output: 0.9362944283730668



  

