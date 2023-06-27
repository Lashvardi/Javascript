//? API

// ? რას აკეთებს API (Application Programming Interface)?
// * API არის ერთგვარი ხიდი ჩვენს BackEnd-სა და FrontEnd-ს შორის.

// *  API ს საშუალებით ჩვენ შეგვიძლია მივიღოთ/გავაგზავნოთ სხვადასხვა მონაცემები ჩვენს მონაცემთა ბაზაში.


// * API Request-ის გაკეთება ხდება გარკვეული მისამართზე.
// * მაგალითად: https://fakestoreapi.com/products


// * API Request-ის ტიპები:
// ! 4 მთავარი ტიპი
// ? GET - მოთხოვნა ინფორმაციის მიღებისთვის
// ? POST - ინფორმაციის გაგზავნისთვის
// ? PUT - ინფორმაციის განახლებისთვის
// ? DELETE - ინფორმაციის წაშლისთვის


// * API Response-ის ტიპები:
// ! 3 მთავარი ტიპი
// ? JSON
// ? XML
// ? HTML


// ? რა არის JSON?
// * JSON არის ფორმატი ინფორმაციის გადაცემისთვის.
// * მაგალითად:
// * {
// *  "name": "John",
// *  "age": 30,
// *  "cars": [
// *    { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
// *    { "name": "BMW", "models": ["320", "X3", "X5"] },
// *    { "name": "Fiat", "models": ["500", "Panda"] }
// *  ]

// ? რა არის XML?
// * XML არის ფორმატი ინფორმაციის გადაცემისთვის.
// * მაგალითად:
// * <note>
// *  <to>Tove</to>
// *  <from>Jani</from>
// *  <heading>Reminder</heading>
// *  <body>Don't forget me this weekend!</body>
// * </note>

// ? რა არის HTML?
// * HTML არის ფორმატი ინფორმაციის გადაცემისთვის.
// * მაგალითად:
// * <!DOCTYPE html>
// * <html>
// * <head>
// * <title>Page Title</title>
// * </head>
// * <body>
// * <h1>This is a Heading</h1>
// * <p>This is a paragraph.</p>
// * </body>
// * </html>


// ? API როგორ გამოვიყენებთ?

// ? Javascript ის მზა მეთოდით.

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
     .then(json=>console.log(json))
