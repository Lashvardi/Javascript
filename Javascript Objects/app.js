// ? ობიექტი Object

// * Javascript-ში ობიექტი არის ერთგვარი კონტეინერი რომელიც შეიცავს თავის თვისებებს და მეთოდებს
// * მაგალითად თუ გვაქვს ობიექტი სახელით cars ობიექტის შიგნით გვექნება მანქანის მოდელი, ფერი, წელი და სხვა თვისებები.
// * ობიექტი არის Key Value ტიპის: სადაც Key არის ჩვენი მნიშვნელობის ანუ Values- გასაღები.
// * მაგ

let cars = {
    model: "BMW",
    color: "Black",
    year: 2020,
    isUsed: false,
  }

//? ჩვენს ამ ობიექტში Cars Key-ები (გასაღებები) იქნება

// * model
// * color
// * year
// * isUsed


//? მნიშვნელობები კი
// * BMW
// * Black
// * 2020
// * false

// ? როგორ მივწვდეთ რომელიმე ელემენტს ობიექტში

console.log(cars.model) // * ამ შემთხვევაში გამოიტანს BMW-ს
cars.model = "Mercedes"
console.log(cars.model)
console.log(cars.color) // * ამ შემთხვევაში გამოიტანს Black-ს
console.log(cars.year) // * ამ შემთხვევაში გამოიტანს 2020-ს
console.log(cars.isUsed) // * ამ შემთხვევაში გამოიტანს false-ს

console.log(cars) // * ამ შემთხვევაში გამოიტანს მთელ ობიექტს

// ? ობიექტებს ასევე აქვთ მეთოდები
var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    started: false,
    start: function() {
      this.started = true;
      console.log(`Car ${this.brand} ${this.model} started.`);
    },
    stop: function() {
      this.started = false;
      console.log(`Car ${this.brand} ${this.model} stopped.`);
    }
  };
  
console.log(car.brand); // "Toyota"

// მივწვდეთ ობიექტის მეთოდს start
car.start(); // "Car Toyota Camry started."

console.log(car.started) // true

// this Keyword

// * javasript-ში This გვეხმარება მივწვდეთ კონტექსტში არსებულ მნიშვნელობებს.

// ? შევქმნათ მასივი ობიექტების.

var carsDealership = [
    { brand: "Toyota", model: "Camry", year: 2021, img: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75' },
    { brand: "BMW", model: "X5", year: 2020, img : "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75" },
    { brand: "Mercedes", model: "E-class", year: 2021, img : "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75" }
]


// ? როგორ მივწვდეთ თითოეულ მანქანას
// * თითოეულ ობიექტს აქვს ინდექსი რომლის მიხედვიდაც შეგვიძლია მას მივწვდეთ.

console.log(carsDealership[0]) // { brand: "Toyota", model: "Camry", year: 2021, started: false }
console.log(carsDealership[1]) // { brand: "BMW", model: "X5", year: 2020, started: false }
console.log(carsDealership[2].brand) // Mercedes


// ? ჩვენი ობიექტების HTML - ში გამოტანა.

// * ავიღოთ ჩვენი კონტეინერი სადაც გვინდა ამ ელემენტების გამოტანა.
let carsDealershipHTML = document.getElementById("carsDealership");

for (let i = 0; i < carsDealership.length; i++) {
    carsDealershipHTML.innerHTML +=        `
        <div class="car"> 
            <h2>${carsDealership[i].brand} ${carsDealership[i].model}</h2>
            <p>${carsDealership[i].year}</p>
            <img src="${carsDealership[i].img}" alt="">
        </div>
    `
}

let colors = ["red", "yellow", "black"]

console.log(colors[0]) // red



// Todo: საკლასო დავალება ჩვენს CarsDealerships-ს ჩავუმატოთ აღწერილობა და შემდგომ ეს აღწერილობა გამოვიტანოთ HTML-ში.
  
