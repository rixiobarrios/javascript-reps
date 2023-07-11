// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// To sort the elements in an array without mutating the original array, use toSorted().

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// Create a sort--------------------------------------------

const arr = [1, 30, 4, 21, 100000];
arr.sort();
console.log(arr);
// Expected output: Array [1, 100000, 21, 30, 4]
