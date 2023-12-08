// CONDITIONALS
// Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

// There are multiple different types of conditionals in JavaScript including:

// “If” statements: where if a condition is true it is used to specify execution for a block of code.
// “Else” statements: where if the same condition is false it specifies the execution for a block of code.
// “Else if” statements: this specifies a new test if the first condition is false.
// Now that you have the basic JavaScript conditional statement definitions, let’s show you examples of each.

// if (10 > 5) {
//     console.log('10 is greater then 5');
// } else {
//     console.log('5 is not greater then 10');
// }

// Create a conditional--------------------------------------------

// function largerThan(num1, num2) {
//     if (num1 > num2) {
//         console.log(num1 + ' is the largest integer');
//     } else if (num1 < num2) {
//         console.log(num2 + ' is the largest integer');
//     } else if (num1 === num2) {
//         console.log(num1 + ' and ' + num2 + ' are equal');
//     }
//     return;
// }

// largerThan(8, 3);
// largerThan(1, 7);
// largerThan(5, 5);

// Create a conditional--------------------------------------------

// let stopLight = 'yellow';

// if (stopLight === 'red') {
//     console.log('Stop!');
// } else if (stopLight === 'yellow') {
//     console.log('Slow down.');
// } else if (stopLight === 'green') {
//     console.log('Go!');
// } else {
//     console.log('Caution, unknown!');
// }

// Create a conditional--------------------------------------------

// let season = 'summer';

// if (season === 'spring') {
//     console.log("It's spring! The trees are budding!");
// } else if (season === 'winter') {
//     console.log("It's winter! Everything is covered in snow.");
// } else if (season === 'fall') {
//     console.log("It's fall! Leaves are falling!");
// } else if (season === 'summer') {
//     console.log("It's sunny and warm because it's summer!");
// } else {
//     console.log('Invalid season.');
// }

// Create a conditional--------------------------------------------

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegisteredRunner = false; // Change to test

let runnersAge = 18; // Change to test

if (runnersAge > 18 && raceNumber >= 1000) {
    raceNumber += 1000;
}
if (runnersAge > 18 && earlyRegisteredRunner === true) {
    console.log(`You will race at 9:30 am with race number ${raceNumber}`);
} else if (runnersAge > 18 && earlyRegisteredRunner === false) {
    console.log(`You will race at 11:00 am with race number ${raceNumber}`);
} else if (
    (runnersAge === 18 && earlyRegisteredRunner === true) ||
    earlyRegisteredRunner === false
) {
    console.log(`See the registration desk`);
} else {
    console.log(`You will race at 12:30 pm with race number ${raceNumber}`);
}
