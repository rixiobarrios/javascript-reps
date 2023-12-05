// Conditional (ternary) operator

// The conditional (ternary)
// operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

// Without ternary operator
// let isCorrect = true;

// if (isCorrect) {
//     console.log('Correct!');
// } else {
//     console.log('Incorrect!');
// }

// With ternary operator
let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');
