// REDUCE:

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:

// const arr = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = arr.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10

// Create .reduce()--------------------------------------------
// Find the largest number contained in a JavaScript array

let arr = [5, 10, 20, 3, 98, 95];
let largest = arr[0];
function largestNumber() {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) largest = arr[i];
    }
    return largest;
}
console.log(largestNumber());
