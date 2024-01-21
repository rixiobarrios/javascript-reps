// FOR IN LOOP:

// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

//-------------------------------------------------------------

// const passengers = [
//     'Will Alexander',
//     'Sarah Kate',
//     'Audrey Simon',
//     'Tau Perkington',
// ];

// for (let i in passengers) {
//     console.log('Boarding passenger ' + passengers[i]);
// }

//---------------------------------------------------------------

const passengers = [
    'Will Alexander',
    'Sarah Kate',
    'Audrey Simon',
    'Tau Perkington',
];

let passengersBoarded = 10;

for (let i in passengers) {
    passengersBoarded++;
}

console.log(passengersBoarded);

//---------------------------------------------------------
