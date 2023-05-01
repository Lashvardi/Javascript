// TODO: დავაყენოთ Live Server.
// TODO: დავაყენოთ Better Comments.
// TODO: დავაყენოთ Prettier.



// ? getElementById();

document.getElementById("demo").innerHTML = "<h1>Hello World!</h1";
document.getElementById("demo1").innerText = "<h1>Hello World!</h1";
// * getElementById() პოულობს ელემენტს მისი იდენტიფიკატორის მიხედვით (ID) ატრიბუტით და აბრუნებს ელემენტს რომელიც მოიძებნა.
// * .innerHTML წერს ელემენტში შეტანილ ტექსტს ან HTML კოდს.

// * .innerText წერს ელემენტში ტექსტს.


// ? getElementsByClassName();

document.getElementsByClassName("getElementByStyle")[0].innerHTML = "<h1>Hello World!</h1>";
// * getElementByClassName() პოულობს ელემნტს მისი კლასის მიხედვით
// * [0] რადგანაც ერთ კლასი შეიძლება ქონდეს ბევრ ელემენტს ამით ვახვედრებთ თუ რიგით რომელ ელემენტზე გვინდა
// * მოვახდინოთ ცვლილება.


// ? getElementsByTagName();

document.getElementsByTagName("p")[0].innerHTML = "<h1>Hello From P Tag</h1>";

// ! Style With Javascript

document.getElementsByTagName("p")[0].style.color = "red";
document.getElementsByTagName("p")[0].style.fontSize = "35px";


// ? querySelector();

document.querySelector("p").style.color = "blue";
// * querySelector() შეუძლია აიღოს ნებისმიერი ელემენტი მთავარია მივუთითოთ სელექტორი.

// * სელექტორები ID, Class, Tag და ა.შ.

// * ID ის შემთხვევაში უნდა გავუწეროთ # (Hashtag) document.querySelector("#demo").style.color = "blue";
// * Class ის შემთხვევაში უნდა გავუწეროთ . (Dot) document.querySelector(".demo").style.color = "blue";
// * Tag ის შემთხვევაში უნდა გავუწეროთ ელემენტის სახელი document.querySelector("p").style.color = "blue";




// ! Alerts
let FirstName = "Aleksandre";
let LastName = "Beridze";


// alert("Hello!" + " " + FirstName + " " + LastName);


// ! String Interpolation

// alert(`Hello ${FirstName} ${LastName}`);


// ! Attributeb-ის ცვლა
document.getElementById("ImageDemo").src = "https://picsum.photos/200/300";
// * ჯავასკრიპტიდან შეგვიძლია ვცვალოთ როგორც ტეგის კონტენტი ასევე შეგვიძლია ვცვალოთ ატრიბუტები.

// * რა არის ატრიბუტები
// * src, href, alt, title, class, id და ა.შ.



//TODO: დავალება

//?  შევქმნათ ორი ღილაკი ერთი აქრობს ნათურას მეორე ანთებს.






