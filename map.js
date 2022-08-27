// MAP:

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const arr = [1, 4, 9, 16];

// pass a function to map
const mapper = arr.map((x) => x * 2);

console.log(mapper);
// expected output: Array [2, 8, 18, 32]
