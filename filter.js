// FILTER:

// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// const words = [
//     'spray',
//     'limit',
//     'elite',
//     'exuberant',
//     'destruction',
//     'present',
// ];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// Create a filter--------------------------------------------

// Filter by voting age:
// function canVote(age) {
//     return age >= 18;
// }

// function func() {
//     var filtered = [24, 33, 16, 40].filter(canVote);
//     return filtered;
// }
// console.log(func()); //=> [24, 33, 40]

// Create a filter--------------------------------------------

// Filter by positive numbers:
// function isPositive(value) {
//     return value > 0;
// }

// var filtered = [112, 52, 0, -1, 944].filter(isPositive);

// console.log(filtered);//=> [112, 52, 944]

// Create a for filter--------------------------------------------

// Filter by even numbers:
function isEven(value) {
    return value % 2 == 0;
}

var filtered = [11, 98, 31, 23, 944].filter(isEven);

console.log(filtered); //=> [98, 944]
