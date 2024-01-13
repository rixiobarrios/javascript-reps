// WHILE LOOP:

// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

// To start, let’s convert a for loop into a while loop:

// // A for loop that prints 1, 2, and 3
// for (let counterOne = 1; counterOne < 4; counterOne++) {
//     console.log(counterOne);
// }

// // A while loop that prints 1, 2, and 3
// let counterTwo = 1;
// while (counterTwo < 4) {
//     console.log(counterTwo);
//     counterTwo++;
// }

//------------------------------------------------------------

// let n = 0;

// while (n < 3) {
//     n++;
// }

// console.log(n);
// // expected output: 3

//--------------------------------------------------------------

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}
