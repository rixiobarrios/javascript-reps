// forEach() (iterator):

// The forEach() method executes a provided function once for each array element.

// const arr = ['a', 'b', 'c'];

// arr.forEach((element) => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// Create a .forEach--------------------------------------------

// Gru, the mob boss, wants to test out some array methods with callbacks. Let's go ahead and help him out.

// First, he wants to test out forEach to check who's present. So as he goes down the array of minions, they should console.log that they're here.

// const minions = [
//     'bob',
//     'kevin',
//     'stuart',
//     'dave',
//     'jerry',
//     'kevin',
//     'mark',
//     'tim',
//     'phil',
//     'carl',
// ];

// minions.forEach(present);

// function present(item) {
//     console.log(item + ' - here');
// }

// Create a .forEach--------------------------------------------

// const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

// artists.forEach((artist) => {
//     console.log(artist + ' is one of my favorite artists.');
// });

//-----------------------------------------------------------

// const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

// // Solution A
// // Using a callback function: function(groceryItem)
// groceries.forEach(function (groceryItem) {
//     console.log(' - ' + groceryItem);
// });

// // Solution B
// // Using arrow function
// groceries.forEach((groceryItem) => console.log(groceryItem));

// // Solution C
// // Define a previous function
// function printGrocery(element) {
//     console.log(element);
// }

// groceries.forEach(printGrocery);

//-----------------------------------------------------------

// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// // Iterate over fruits below
// fruits.forEach(function (fruitItem) {
//     console.log('I want to eat a ' + fruitItem);
// });

//----------------------------------------------------------

// [1, 2, 3, 4].forEach(function (element) {
//     console.log(`Printing ${element} to the console!`);
// });

//-----------------------------------------------------------

const cities = [
    'Orlando',
    'Dubai',
    'Edinburgh',
    'Chennai',
    'Accra',
    'Denver',
    'Eskisehir',
    'Medellin',
    'Yokohama',
];

//  Choose a method that will return undefined
cities.forEach((city) => console.log('Have you visited ' + city + '?'));

//---------------------------------------------------------
