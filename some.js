// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// const array = [1, 2, 3, 4, 5];

// // Checks whether an element is even
// // const even = (element) => element % 2 === 0;

// function even(element) {
//     return element % 2 === 0;
// }

// console.log(array.some(even));
// // Expected output: true

// Create a some--------------------------------------------

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// console.log(
//     words.some((word) => {
//         return word.length < 6;
//     })
// );

//-----------------------------------------------------------

const nums = [1, 50, 75, 200, 350, 525, 1000];

// Choose a method that will return a boolean value
const lessThanZero = nums.some((num) => num < 0);

console.log(lessThanZero);

//-----------------------------------------------------------
