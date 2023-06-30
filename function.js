//FUNCTIONS

// Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

// function square(number) {
//     return number * number;
// }

// console.log(square(9));

// Calculator: Coin Combination

// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

let coins = [];
coins[0] = 'pennies'; // $00.01
coins[1] = 'nickles'; // $00.05
coins[2] = 'dimes'; // $00.10
coins[3] = 'quarters'; // $00.25

// console.log(coins);

// function coinCombo(cents) {
//     if (cents === 1) {
//         coins.splice(0, 1, 1);
//     }
//     if (cents === 5) {
//         coins.splice(1, 1, 1);
//     }
//     if (cents === 10) {
//         coins.splice(2, 1, 1);
//     }
//     if (cents === 25) {
//         coins.splice(3, 1, 1);
//     } else {
//         coins.splice(0, 1, 0);
//     }
//     return coins;
// }

// console.log(coinCombo(1));
