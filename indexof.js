// indexOf()

// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

//-------------------------------------------------------------

const groceryList = [
    'orange juice',
    'bananas',
    'coffee beans',
    'brown rice',
    'pasta',
    'coconut oil',
    'plantains',
];

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

//------------------------------------------------------------
