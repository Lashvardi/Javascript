var carsDealership = [
    { brand: "Toyota", model: "Camry", year: 2021, started: false },
    { brand: "BMW", model: "X5", year: 2020, started: false },
    { brand: "Mercedes", model: "E-class", year: 2021, started: false }
]

// ? როგორ მივწვდეთ თითოეულ მანქანას
// * თითოეულ ობიექტს აქვს ინდექსი რომლის მიხედვიდაც შეგვიძლია მას მივწვდეთ.

console.log(carsDealership[0]) // { brand: "Toyota", model: "Camry", year: 2021, started: false }
console.log(carsDealership[1]) // { brand: "BMW", model: "X5", year: 2020, started: false }
console.log(carsDealership[2].brand) // Mercedes