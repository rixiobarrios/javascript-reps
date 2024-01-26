// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// Arrow functions cannot use yield within their body and cannot be created as generator functions.

// Syntax

// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }

// Create arrow function-------------------------------------------

//regular function
// function hello() {
//     return console.log('Hello!');
// }
// hello();

// arrow function
// const hello = () => {
//     console.log('Hello!');
// };
// hello();

// Create arrow function-------------------------------------------

// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(6, 4));

// const sum = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(sum(11, 9));

// Create arrow function-------------------------------------------

// // Function
// function plantNeedsWater(day) {
//     if (day === 'Wednesday') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(plantNeedsWater('Tuesday')); // Return false

// // Arrow function
// const plantNeedsWater = (day) => {
//     if (day === 'Wednesday') {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(plantNeedsWater('Friday')); // Return false

// // Concise body
// const plantNeedsWater = (day) => (day === 'Wednesday' ? true : false);

// console.log(plantNeedsWater('Sunday')); // Return false

// Create arrow function-------------------------------------------

const printStringStats = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    const wordCount = wordArray.length;
    let letterCount = 0;
    for (let word of wordArray) {
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        letterCount += word.length;
    }
    const averageWordLength = parseFloat((letterCount / wordCount).toFixed(2));
    const stringStats = {
        wordCount: wordCount,
        letterCount: letterCount,
        averageWordLength: averageWordLength,
    };
    console.log(stringStats);
};
