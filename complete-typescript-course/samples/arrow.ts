// const message = 'Hello World';
// function sayHello( message) {
//     console.log(message)
// }
// const sayHello = ( message: any) => console.log(message)
// sayHello(message);

// function Person(name: string) {
//     this.name = name;
//     var that = this;
//     this.sayHi = function() {
//         setTimeout(function() {
//             console.log('Hello my name is '+ that.name);
//         }, 1000);
//     }
// }
// const person = new Person('Chaman');
// person.sayHi();

function Person(name: string) {
    this.name = name;
   // var that = this;
    this.sayHi = function() {
        setTimeout( () => {
            console.log('Hello my name is '+ this.name);
        }, 1000);
    }
}
const person = new Person('Chaman');
person.sayHi();