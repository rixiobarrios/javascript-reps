// FILTER:

// The .filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

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

// // Filter by even numbers:
// function isEven(value) {
//     return value % 2 == 0;
// }

// var filtered = [11, 98, 31, 23, 944].filter(isEven);

// console.log(filtered); //=> [98, 944]

//-------------------------------------------------

// const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

// const onlyNumbers = things.filter((thing) => {
//     return typeof thing === 'number';
// });

// console.log(onlyNumbers);

//--------------------------------------------------------

// const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

// const shortWords = words.filter((word) => {
//     return word.length < 6;
// });

// console.log(shortWords);

//----------------------------------------------------------

// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// // Call .filter() on randomNumbers below
// const smallNumbers = randomNumbers.filter((number) => {
//     return number < 250;
// });

// console.log(smallNumbers);

//-----------------------------------------------------------

// const favoriteWords = [
//     'nostalgia',
//     'hyperbole',
//     'fervent',
//     'esoteric',
//     'serene',
// ];

// const longFavoriteWords = favoriteWords.filter((word) => {
//     return word.length > 7;
// });

// console.log(longFavoriteWords);

//-----------------------------------------------------------

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// // Use filter to create a new array
// const interestingWords = words.filter((word) => {
//     return word.length > 5;
// });

// console.log(interestingWords);

//----------------------------------------------------------

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

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

console.log(longCities);

//--------------------------------------------------------
