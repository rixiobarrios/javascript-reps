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

// const cards = ['diamond', 'spade', 'heart', 'club'];

// // Write your code below
// let currentCard;

// while (currentCard !== 'spade') {
//     currentCard = cards[Math.floor(Math.random() * 4)];
//     console.log(currentCard);
// }

//-------------------------------------------------------------

// let seatsLeft = 10;
// let passengersStillToBoard = 8;

// let passengersBoarded = 0;

// while (seatsLeft > 0 && passengersStillToBoard > 0) {
//     passengersBoarded++; // one passenger boards
//     passengersStillToBoard--; // so there is one fewer still to board
//     seatsLeft--; // and one fewer seat
// }

// console.log(passengersBoarded); // prints 8, as there are 8 passengers for 10 seats

//-----------------------------------------------------------

let guestsSeated = 5;

let seatsRemaining = 10;
let guestsRemaining = 7;

while (seatsRemaining > 0 && guestsRemaining > 0) {
    guestsSeated++;
    seatsRemaining--;
    guestsRemaining--;
}

console.log(guestsSeated);
