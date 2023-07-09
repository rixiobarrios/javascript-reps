// The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

const arr = ['one', 'two', 'three'];
console.log('arr:', arr);
// Expected output: "arr:" Array ["one", "two", "three"]

const reversed = arr.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('arr:', arr);
// Expected output: "arr:" Array ["three", "two", "one"]

// Create a reverse--------------------------------------------
