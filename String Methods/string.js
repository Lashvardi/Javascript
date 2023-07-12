
let Mystring = 'მე ვსწავლობ front-end პროგრამირებას front-end';
// Mystring.length ითვლის სტრინგში სიმბოლოების რაოდენობას
// Mystring.slice(4, 12) ჭრის სტრინგს, პირველი პარამეტრი განსაზღვრავს რამდენი ელემენტი უნდა მოიჭრას, მეორე პარამეტრი განსაზღვრავს რამდენი ელემენტის გამოტოვებით უნდა მოხდეს ჭრა
// Mystring.toUpperCase()  სტრინგის სიმბოლოების გადიდება
// Mystring.toLowerCase()  სტრინგის სიმბოლოების დაპატარავება
// Mystring.search('პროგრამირებას') ეძებს სიმბოლოებს სტრინგის შიგნით, თუ ვერ იპოვა აბრუნებს -1
// Mystring.match(/Front-end/gi) ეძებს სიმბოლოებს სტრინგში და აბრუნებს მასივის სახით
// Mystring.replace('front-end', '****'); სტრინგის შიგნით სიმბოლოების  ჩანაცვლება
//  Mystring.replaceAll('front-end', '****'); ანაცვლებს სტრინგში სიმბოლოებს (ყველას რასაც იპოვის)


// Users.length ითვლის    მასივის ელემენტების რაოდენობას
// Users.push('junior')    მასივში ახალი ელემენტის ჩამატება (ბოლო წევრად)
// Users.unshift('junior') მასივში ახალი ელემენტის ჩამატება (პირველ წევრად)
// Users.pop() მასივის ბოლო ელემენტის მოჭრა
// Users.shift() მასივის პირველი ელემენტის მოჭრა
// Users.splice(2,1) მასივის ჭრა
// Users.toString() მასივის სტრინგში გადაყვანა
// Users.splice(2,1, 'ახალი ელემენტი'); მასივის ჭრა  ჩამატება
let Users = ['25', 'user', 'admin',  'user', 'editor'];

/*

 let findrole = Users.some(function(element){
    return element == 'editors'
 }); ამოწმებს მასივის ერთ ერთ  ელემენტი თუ მაინც აკმაყოფილებს პირობას

 let findrole = Users.every(function(element){
    return element == 'editors'
 }) ამოწმებს მასივის ყველა ელემენტი თუ მაინც აკმაყოფილებს პირობას

  let findrole = Users.find(function(element){
    return element == 'user';
 }) ეძებს ელემენტს გადაცემული პირობის მიხედვით და აბრუნებს პირველივე ელემენტს

  let findrole = Users.filter(function(element){
    return element == 'user';
 })  ეძებს ელემენტს გადაცემული პირობის მიხედვით და აბრუნებს ახალ მასივს



  Users.forEach(function(el){
      outp.innerHTML += `<h1 class="myclass"> ${el} </h1>`;
 })  ამეორებს მასივის ყველა ელემენტს

*/





