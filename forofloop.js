// FOR OF LOOP:

// A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

// Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.

// const arr = [3, 5, 7];
// arr.foo = 'hello';

// for (const i in arr) {
//     console.log(i); // logs "0", "1", "2", "foo"
// }

// for (const i of arr) {
//     console.log(i); // logs 3, 5, 7
// }

//-------------------------------------------------------------

// const passengers = [
//     'Will Alexander',
//     'Sarah Kate',
//     'Audrey Simon',
//     'Tau Perkington',
// ];

// for (let passenger of passengers) {
//     console.log('Boarding passenger ' + passenger);
// }

//----------------------------------------------------------

// const passengers = [
//     {
//         name: 'Will Alexander',
//         ticketNumber: 209542,
//     },
//     {
//         name: 'Sarah Kate',
//         ticketNumber: 169336,
//     },
//     {
//         name: 'Audrey Simon',
//         ticketNumber: 779042,
//     },
//     {
//         name: 'Tau Perkington',
//         ticketNumber: 703911,
//     },
// ];

// for (let passenger of passengers) {
//     console.log(
//         'Boarding passenger ' +
//             passenger.name +
//             ' with ticket number ' +
//             passenger.ticketNumber
//     );
// }

//---------------------------------------------------------

const guests = [
    {
        name: 'Will Alexander',
        vip: false,
    },
    {
        name: 'Sarah Kate',
        vip: true,
    },
    {
        name: 'Audrey Simon',
        vip: true,
    },
    {
        name: 'Tau Perkington',
        vip: false,
    },
];

let vips = 0;
let normies = 0;

for (let guest of guests) {
    if (guest.vip) {
        vips++;
    }
}

console.log(vips);

//-----------------------------------------------------------
