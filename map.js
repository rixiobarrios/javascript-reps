// MAP:

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

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

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
    return number * number;
});

console.log(squareNumbers);
