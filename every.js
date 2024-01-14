// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// const arr = [1, 30, 39, 29, 10, 13];

// function isBelowThreshold(currentValue) {
//     return currentValue < 40;
// }

// console.log(arr.every(isBelowThreshold)); // true

// Create an every--------------------------------------------

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(
    interestingWords.every((word) => {
        return word.length > 5;
    })
);
