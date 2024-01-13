// Do...While Statements

// In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

// A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:

// let countString = '';
// let i = 0;

// do {
//     countString = countString + i;
//     i++;
// } while (i < 5);

// console.log(countString);

// Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

// const firstMessage = 'I will print!';
// const secondMessage = 'I will not print!';

// // A do while with a stopping condition that evaluates to false
// do {
//     console.log(firstMessage);
// } while (true === false);

// // A while loop with a stopping condition that evaluates to false
// while (true === false) {
//     console.log(secondMessage);
// }

//------------------------------------------------------------

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

// do {
//     cupsAdded = cupsAdded + 1;
//     cupsAdded++;
// } while (cupsAdded < cupsOfSugarNeeded);

// console.log(cupsAdded);

// Another solution:

do {
    cupsAdded++;
    console.log(cupsAdded + ' cup was added');
} while (cupsAdded < cupsOfSugarNeeded);

//--------------------------------------------------------
