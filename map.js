// MAP:

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. This method returns a new array.

// const arr = [1, 4, 9, 16];

// pass a function to map
// const mapper = arr.map((x) => x * 2);

// console.log(mapper);
// expected output: Array [2, 8, 18, 32]

// Create a .map--------------------------------------------

// Using the map method, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called capitalizedMinions.

// const minions = [
//     'bob',
//     'kevin',
//     'stuart',
//     'dave',
//     'jerry',
//     'kevin',
//     'mark',
//     'tim',
//     'phil',
//     'carl',
// ];

// const capitalizedMinions = minions.map(function (minion) {
//     if (minion.toLowerCase() === 'kevin') {
//         return minion;
//     } else {
//         return minion.charAt(0).toUpperCase() + minion.slice(1);
//     }
// });

// console.log(capitalizedMinions);

// Create a .map--------------------------------------------

// const numbers = [1, 2, 3, 4, 5];

// const squareNumbers = numbers.map((number) => {
//     return number * number;
// });

// console.log(squareNumbers);

//---------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5];

// const bigNumbers = numbers.map((number) => {
//     return number * 10;
// });

// console.log(bigNumbers);

//--------------------------------------------------------

// const animals = [
//     'Hen',
//     'elephant',
//     'llama',
//     'leopard',
//     'ostrich',
//     'Whale',
//     'octopus',
//     'rabbit',
//     'lion',
//     'dog',
// ];

// // Create the secretMessage array below
// const secretMessage = animals.map((animal) => {
//     return animal[0];
// });

// console.log(secretMessage.join(''));

//---------------------------------------------------------

// const bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below
// const smallNumbers = bigNumbers.map((number) => {
//     return number / 100;
// });

// console.log(smallNumbers);

//----------------------------------------------------------

const nums = [1, 50, 75, 200, 350, 525, 1000];

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

console.log(smallerNums);

//-----------------------------------------------------------
