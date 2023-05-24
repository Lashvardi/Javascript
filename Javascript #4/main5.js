let myArray = [1, 2, 3, "four", true];
let mySecondArray = [5, 7, 12, 5125, 25];

// ? Concat გააერთიანებს ჩვენს ორ მასივს (Arrays)
let thirdArray = myArray.concat(mySecondArray);
console.log(thirdArray); // Output: [1, 2, 3, 'four', true, 5, 7, 12, 5125, 25]

// ? Join დაგვიბრუნებს ყველა ელემენტს სტრინგის სახით და გამოყოფს , ით
let myArrayString = myArray.join(", ");
console.log(myArrayString); // Output: "1, 2, 3, four, true"


// ? Reverse მოატრიალებს ჩვენს მასივს
myArray.reverse();
console.log(myArray); // Output: [true, 'four', 3, 2, 1]

// ? indexOf დაგვიბრუნებს ინდექსს რომელზეც დგას ჩვენი ელემენტი
console.log(myArray.indexOf("four")); // Output: 1
console.log(mySecondArray.indexOf(7)); // Output: 1

// ? Slice გადაეცემა 2 ინდექი, და მათ შორის რა ინდექსებიცაა იმათ დააბრუნებს
let slicedArray = myArray.slice(2, 4);
console.log(slicedArray); // Output: [3, 'four']

// ? push ჩვენს მასივის ბოლოში დაამატებს ახალ ელემენტს
myArray.push("new element");
console.log(myArray); // Output: [1, 2, 3, 'four', true, 'new element']

// ? pop წაშლის ბოლო ელემენტს
let poppedElement = myArray.pop();
console.log(poppedElement); // Output: "new element"

// ? shift შლის პირველ ელემენტს
let shiftedElement = myArray.shift();
console.log(shiftedElement); // Output: 1

// ? Unshift ამატებს ახალ ელემენტს ჩვენს მასივში
myArray.unshift(0);
console.log(myArray); // Output: [0, 2, 3, 'four', true]

// ! ობიექტები
const person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "cooking", "hiking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

console.log(person.name);
console.log(person.hobbies[1]);

// ! არსებოსბ ორი გზა რომ მივმართოთ ჩვენს ობიექტს
console.log(person["address"]["city"]);
console.log(person.address.city);

person.age = 25;

person.hobbies.push("coding");

console.log(person.hobbies);

person.jobTitle = "Web Developer";
console.log(person);

// let employees = [
//   {
//     name: "John Doe",
//     age: 30,
//     hobbies: ["reading", "cooking", "hiking"],
//     address: {
//       street: "123 Main St",
//     },
//   },
//   {
//     name: "Jane Smith",
//     age: 25,
//     hobbies: ["swimming", "traveling", "dancing"],
//     address: {
//       street: "456 Elm St",
//     },
//   },
//   {
//     name: "Bob Johnson",
//     age: 40,
//     hobbies: ["fishing", "camping", "gardening"],
//     address: {
//       street: "789 Oak St",
//     },
//   },
// ];

// let box = document.getElementById("test1");

// for (let i = 0; i < employees.length; i++) {
//     box.innerHTML += <h1>employees[i]</h1>;
// }


let Cars = [
  {
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    name: "BMW",
    model: "X5",
    color: "Black",
    price: 50000
  },
  {
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    name: "Mercedes",
    model: "S500",
    color: "Blue",
    price: 60000
  },
  {
    img: "https://img.freepik.com/premium-photo/blue-premium-business-sedan-car-sports-configuration-white-background-3d-rendering_101266-26564.jpg",
    name: "Audi",
    model: "A8",
    color: "Blue",
    price: 70000
  },
  {
    img: "https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75",
    name: "Mahindra",
    model: "Scorpio",
    color: "Red",
    price: 40000
  }
]


let box = document.getElementById("test1");

for (let i = 0; i < Cars.length; i++) {
  let card = `
  <div class="card" style="width: 18rem;">
  <img src="${Cars[i].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${Cars[i].name}</h5>
    <p>${Cars[i].model}</p>
    <p style="color: ${Cars[i].color}">${Cars[i].color}</p>
    <a href="#" class="btn btn-primary">${Cars[i].price}$</a>
  </div>
</div>`
box.innerHTML += card;
}



// ! შევქმნათ მასივი სადაც გადავცემთ 4 ობიექტს.
// ! ობიექტებში უნდა იყოს ინფორმაცია მანქანების შესახებ.
// ! ეს ინფორმაცია უნდა გამოვიტანოთ HTML ში Card ის სახით
// ! გამოვიყენოთ სახელი, მანქანის მოდელი, ფერი და ფასი