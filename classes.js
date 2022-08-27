// CLASSES

// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

// Defining classes
// Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

// Class declarations
// One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
