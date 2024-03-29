// Arrays

// Organizing and storing data is a foundational concept of programming.

// One way we organize data in real life is by making lists. Let’s make one here:

// New Year's Resolutions:

// 1. Keep a journal
// 2. Take a falconry class
// 3. Learn to juggle
// Let’s now write this list in JavaScript, as an array:

// let newYearsResolutions = [
//     'Keep a journal',
//     'Take a falconry class',
//     'Learn to juggle',
// ];

// console.log(newYearsResolutions);

// Accessing Elements
// Each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

// Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0. Let’s see how we could access an element in an array:

// let cities = ['Chicago', 'Beijing', 'Dubai'];

// // Access first city through bracket notation
// console.log(cities[0]);

// // Access first letter of first city through bracket notation
// console.log(cities[0][0]);

//-----------------------------------------------------------------

// let concepts = ['creating arrays', 'array structures', 'array manipulation'];

// console.log(concepts);

//--------------------------------------------------------------

// const concept = ['arrays', 'can', 'be', 'mutated'];

// function changeArr(arr) {
//     arr[3] = 'MUTATED';
// }

// changeArr(concept);

// console.log(concept);

//-----------------------------------------------------------

// let guests = []; // Empty array

// // reassigned value for array
// guests = ['Sarah Kate', 'Audrey Simon', 'Will Alexander'];

// console.log(guests);

// let firstGuest = guests[0]; // 'Sarah Kate'
// let thirdGuest = guests[2]; // 'Will Alexander'
// let undefinedGuest = guests[12]; // undefined <-- out of scope

//------------------------------------------------------------

// Value vs reference

// let numberOfGuests = 20;

// let totalNumberOfGuests = numberOfGuests; // 20

// let artistProfile = {
//     name: 'Tau Perkington',
//     age: 27,
//     available: true,
// };

// let allProfiles = [artistProfile]; // new Array containing the above object

// artistProfile.available = false; // changing the object

// console.log(allProfiles); // will show { name: 'Tau Perkington', age: 27, available: false }

//------------------------------------------------------------
