// TODO: დავაყენოთ Live Server.
// TODO: დავაყენოთ Better Comments.
// TODO: დავაყენოთ Prettier.


// ? getElementById();

document.getElementById("demo").innerHTML = "<h1>Hello World!</h1";
document.getElementById("demo1").innerText = "<h1>Hello World!</h1";
// * getElementById() პოულობს ელემენტს მისი იდენტიფიკატორის მიხედვით (ID) ატრიბუტით.
// * .innerHTML წერს ელემენტში ჩვენს მიერ შეტანილ ტექსტს ან HTML კოდს.

// * .innerText წერს ელემენტში ტექსტს.

// ! დავიმახსოვროთ რომ innerHTML აღიქვავს HTML კოდს და გამოსახავს მას ჩვეულებრივად.
// ! ხოლო innerText აღიქვამს მხოლოდ ტექსტს შესაბამისად გამოგვიტანს HTML კოდს უბრალოდ ტექსტურად.


// ? getElementsByClassName();

document.getElementsByClassName("getElementByStyle")[0].innerHTML = "<h1>Hello World!</h1>";

// * getElementByClassName() პოულობს ელემნტს მისი კლასის მიხედვით
// * რა არის [0]. ეს არის Index ი იმისა თუ რომელ ელემენტზე უნდა მოახდინსო ზეგავლენა.
// * რადგანაც ერთ კლასი შეიძლება ქონდეს ბევრ ელემენტს ამით ვახვედრებთ თუ რიგით რომელ ელემენტზე გვინდა
// * მოვახდინოთ ცვლილება.


// ? getElementsByTagName();

document.getElementsByTagName("p")[0].innerHTML = "<h1>Hello From P Tag</h1>";

// ! ელემენტის გასტილვა ჯავასკრიპტით

document.getElementsByTagName("p")[0].style.color = "red";
document.getElementsByTagName("p")[0].style.fontSize = "35px";


// ? querySelector();

document.querySelector("p").style.color = "blue";
// * querySelector() შეუძლია აიღოს ნებისმიერი ელემენტი მთავარია მივახვედროთ.

// * ატრიბუტები ID, Class, Tag და ა.შ.

// * ID ის შემთხვევაში უნდა გავუწეროთ # (ჰეშთეგი) document.querySelector("#demo").style.color = "blue";
// * Class ის შემთხვევაში უნდა გავუწეროთ . (წერტილი) document.querySelector(".demo").style.color = "blue";
// * Tag ის შემთხვევაში უნდა გავუწეროთ ელემენტის სახელი document.querySelector("p").style.color = "blue";

// ! Alerts
let FirstName = "Aleksandre";
let LastName = "Beridze";


// alert("Hello!" + " " + FirstName + " " + LastName);


// ! String Interpolation (სტრინგის ინტერპოლაცია)

// alert(`Hello ${FirstName} ${LastName}`);


// ! ატრიბუტების ცვლა
document.getElementById("ImageDemo").src = "https://picsum.photos/200/300";
// * ჯავასკრიპტიდან შეგვიძლია ვცვალოთ როგორც ტეგის კონტენტი ასევე შეგვიძლია ვცვალოთ ატრიბუტები.

// * რა არის ატრიბუტები
// * src, href, alt, title, class, id და ა.შ.




//TODO: დავალება

//? შევქმნათ ორი ღილაკი HTML ში. გამოვიყენოთ ფაილში მოცემული ორი სურათი.
//? ერთი ღილაკი უნდა აქრობდეს ნათურას მეორე კი უნდა ანთებდეს. გამოვიყენოტ
//? ის რაც ავხსენით გაკვეთილზე.






