// Hoisting
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// Here are some of the benefits of hoisting in JavaScript:
// It allows you to use functions and variables before they are declared.

// It makes your code more readable and easier to maintain.
// It can help you to avoid errors.
// Here are some of the limitations of hoisting in JavaScript:
// You cannot use a variable before it is initialized.
// Hoisting does not work with function expressions or arrow functions.

// It can lead to unexpected results if you are not careful.
// Overall, hoisting is a powerful feature that can make your JavaScript code more readable and easier to maintain. However, it is important to be aware of its limitations so that you can avoid errors.

// const x = 1;
// {
//     console.log(x); // ReferenceError
//     const x = 2;
// }

// {
//   var x = 1;
// }
// console.log(x); // 1

//---------------------------------------------------------------

greetWorld(); // Output: Hello, World!

function greetWorld() {
    console.log('Hello, World!');
}

//----------------------------------------------------------------
