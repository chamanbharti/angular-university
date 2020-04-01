class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setName(name) {
        this.name = name;
        return this;
      }
      setAge(age) {
        this.age = age;
        return this;
      }
}
const person = new Person().setName('Chaman').setAge(35);
console.log(person);//Person { name: 'Chaman', age: 35 }
class Employee extends Person {
    constructor(name, age, employeeCode) {
        super(name, age);
        this.employeeCode = employeeCode;
    }
}
class Rectangle {
    constructor(length, width) {
        this._length = length;
        this._width = width;
    }
    get area() {
        return this._length * this._width;
    }
    get length() {
        return this._length;
    }
    set length(length) {
        if(length <= 0) {
            throw new Error('Length must be bigger than 0');
        }
        this._length = length;
    }
    get width(){
        return this._width;
    }
    set width(width){
        if(width <= 0){
            throw new Error('Width must be bigger than 0');
        }
        this._width = width;
    }
}
let rectangle = new Rectangle(1, 2);
console.log(rectangle.area);//2

class Address {
    constructor(streetName) {
      this.streetName = streetName;
    }
  }
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    setAddress() {
      const address = new Address('123 A St.');
    }
  }