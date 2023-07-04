
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