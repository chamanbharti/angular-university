
//1st way to create object by object literal
// var car = {
//     color: "red"
// };

// var car = {
//     "color": "red"
// };

// var car = {
//     //color:red
// };

// var car = {
//     color:"red",
//     model:"gallardo"
// };

// var car = {};
// car;

//2nd way to create object By creating instance of Object
// var car = new Object();
// car.color = "red";
// car.model = "gallardo";
// console.log(car.model);

//3rd way to create object By using an Object constructor
// function car(name,model){
//     this.name = name;
//     this.model = model;
// }
// var car = new car("red","gallardo");

// console.log(car);

//3rd way to create object
// var car = Object.create(null);
// car.color = "red";
// car.model = "gallardo";
// console.log(car);

//4th way to create object
// var book = {};
// book["title"] = "A tale of two cities";
// delete book.title;
// console.log(book);//{ title: 'A tale of two cities' }
// console.log(book["title"]);//A tale of two cities

//how to iterate object
// var book = {title: "A tale of two cities", author:"Charles Dickens"};
// for(var p in book){
//     //console.log(p);//title author
//     console.log(p+":"+book[p]);
// }
// console.log(book._defineGetter_);

var book_as_json = '';
book_as_json = '{"title": "A tale of two cities","author": "Charles Dickens","price": 29}'

console.log(book_as_json);//{"title": "A tale of two cities","author": "Charles Dickens","price": 29}
//convert into object
var _object = JSON.parse(book_as_json);
console.log(_object);