// The .findIndex() Method
// We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

// const jumbledNums = [123, 25, 78, 5, 9];

// const lessThanTen = jumbledNums.findIndex((num) => {
//     return num < 10;
// });

// console.log(lessThanTen); // Output: 3

// console.log(jumbledNums[3]); // Output: 5

// If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

// const greaterThan1000 = jumbledNums.findIndex((num) => {
//     return num > 1000;
// });

// console.log(greaterThan1000); // Output: -1

//----------------------------------------------------------

const animals = [
    'hippo',
    'tiger',
    'lion',
    'seal',
    'cheetah',
    'monkey',
    'salamander',
    'elephant',
];

const foundAnimal = animals.findIndex((animal) => {
    return animal === 'elephant';
});

console.log(foundAnimal); // 7

const startsWithS = animals.findIndex((s) => {
    return s.charAt(0) === 's';
});

console.log(startsWithS); // 3 => 'seal'

//----------------------------------------------------------
