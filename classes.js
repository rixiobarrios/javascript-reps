// CLASSES

// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

// Defining classes
// Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

//Function expressions
// They are very similar to, and has almost the same syntax as, a function declaration. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. See also the chapter about functions for more information.

// const getRectArea = function (width, height) {
//     return width * height;
// };

// console.log(getRectArea(3, 4));
// Expected output: 12

// Class declarations
// One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// Create a class
// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(this.name);
//     }
// }

// let user = new User("John");
// user.sayHi();

//Create a class
// class Car {
//     constructor(make) {
//         this.make = make;
//     }
//     drive() {
//         console.log(this.make);
//     }
// }
// let car = new Car("Chevy");
// car.drive();

//Create a class
// class Dog {
//     constructor(breed) {
//         this.breed = breed;
//     }
//     bark() {
//         console.log(this.breed);
//     }
// }
// let dog = new Dog('Chihuahua');
// dog.bark();

//Create a class
// class Vehicle {
//     constructor(model, year) {
//         this.model = model;
//         this.year = year;
//     }
// }

// let vehicle1 = new Vehicle('Accord', '2008');
// let vehicle2 = new Vehicle('Rondo', '2008');

// console.log(vehicle1);
// console.log(vehicle2);

// Create a class
// class Employee {
//     constructor(title, startYear) {
//         this.title = title;
//         this.startYear = startYear;
//     }
//     companyTime() {
//         const date = new Date();
//         return date.getFullYear() - this.startYear;
//     }
// }
// const employee1 = new Employee('accountant', 2014);
// const employee2 = new Employee('Sales Manager', 2009);

// console.log(
//     'This employee has been with the company for ' +
//         employee1.companyTime() +
//         ' years'
// );
// console.log(
//     'This employee has been with the company for ' +
//         employee2.companyTime() +
//         ' years'
// );

// class Password {
//     constructor(combination) {
//         this.combination = combination;
//     }
// }
// let password1 = new Password('d5T6h*90+');
// let password2 = new Password('g6U9l#86=');

// console.log(password1);
// console.log(password2);

function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

const pen1 = new Pen('Maker', 'Red', '$4');
const pen2 = new Pen('Sharpie', 'Black', '$2');

console.log(pen1);
console.log(pen2);

//Use prototype property of Pen to show only price
Pen.prototype.showPrice = function () {
    console.log(`Price of ${this.name} is ${this.price}`);
};

pen1.showPrice();
pen2.showPrice();
