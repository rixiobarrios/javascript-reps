//OBJECTS

// Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

// In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

// const myCar = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1969,
// };
// console.log(myCar);

// // Create an object-------------------------------------------

// const objA = { a: 1, b: 2, c: 1 };
// const objB = { a: 1, b: 2, c: 1 };
// const objC = { a: 1, b: 2, d: 1 };

// console.log(objA);
// console.log(objB);
// console.log(objC);

//------------------------------------------------

// // An object literal with two key-value pairs
// let spaceship = {
//     'Fuel Type': 'diesel',
//     color: 'silver',
// };

// console.log(spaceship);

//---------------------------------------------------------

// let fasterShip = {
//     'Fuel Type': 'Turbo Fuel',
//     color: 'silver',
// };

// console.log(fasterShip);

//---------------------------------------------------------

// const alienShip = {
//     invade: function () {
//         console.log(
//             'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
//         );
//     },
// };

// console.log(alienShip);

// ES6

// const alienShip = {
//     invade() {
//         console.log(
//             'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
//         );
//     },
// };

// // Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:

// alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

//-----------------------------------------------------------

// let retreatMessage =
//     'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// // Write your code below
// const alienShip = {
//     retreat() {
//         console.log(retreatMessage);
//     },
//     takeOff() {
//         console.log('Spim... Borp... Glix... Blastoff!');
//     },
// };

// alienShip.retreat();
// alienShip.takeOff();

//-----------------------------------------------------------

// // Nested objects
// const spaceship = {
//     telescope: {
//         yearBuilt: 2018,
//         model: '91031-XLT',
//         focalLength: 2032,
//     },
//     crew: {
//         captain: {
//             name: 'Sandra',
//             degree: 'Computer Engineering',
//             encourageTeam() {
//                 console.log('We got this!');
//             },
//         },
//     },
//     engine: {
//         model: 'Nimbus2000',
//     },
//     nanoelectronics: {
//         computer: {
//             terabytes: 100,
//             monitors: 'HD',
//         },
//         'back-up': {
//             battery: 'Lithium',
//             terabytes: 50,
//         },
//     },
// };

// console.log(spaceship.nanoelectronics['back-up'].battery); // Returns 'Lithium')

//----------------------------------------------------------

// let spaceship = {
//     passengers: null,
//     telescope: {
//         yearBuilt: 2018,
//         model: '91031-XLT',
//         focalLength: 2032,
//     },
//     crew: {
//         captain: {
//             name: 'Sandra',
//             degree: 'Computer Engineering',
//             encourageTeam() {
//                 console.log('We got this!');
//             },
//             'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'],
//         },
//     },
//     engine: {
//         model: 'Nimbus2000',
//     },
//     nanoelectronics: {
//         computer: {
//             terabytes: 100,
//             monitors: 'HD',
//         },
//         'back-up': {
//             battery: 'Lithium',
//             terabytes: 50,
//         },
//     },
// };
// let capFave = spaceship.crew.captain['favorite foods'][0];

// console.log(capFave);

// spaceship.passengers = [
//     { name: 'John Doe', weight: 60 },
//     { name: 'Jane Doe', weight: 50 },
// ];

// console.log(spaceship.passengers);

// let firstPassenger = spaceship.passengers[0];

// console.log(firstPassenger);

//---------------------------------------------------------

// // Pass by reference
// const spaceship = {
//     homePlanet: 'Earth',
//     color: 'silver',
// };

// let paintIt = (obj) => {
//     obj.color = 'glorious gold';
// };

// paintIt(spaceship);

// console.log(spaceship.color); // Returns 'glorious gold'

//---------------------------------------------------------

// let spaceship = {
//     homePlanet: 'Earth',
//     color: 'red',
// };
// let tryReassignment = (obj) => {
//     obj = {
//         identified: false,
//         'transport type': 'flying',
//     };
//     console.log(obj); // Prints {'identified': false, 'transport type': 'flying'}
// };
// tryReassignment(spaceship); // The attempt at reassignment does not work.
// spaceship; // Still returns {homePlanet : 'Earth', color : 'red'};

// spaceship = {
//     identified: false,
//     'transport type': 'flying',
// }; // Regular reassignment still works.

// console.log(spaceship);

//-----------------------------------------------------------

// let spaceship = {
//     'Fuel Type': 'Turbo Fuel',
//     homePlanet: 'Earth',
// };

// // Write your code below
// let greenEnergy = (obj) => {
//     obj['Fuel Type'] = 'avocado oil';
// };

// greenEnergy(spaceship);

// console.log(spaceship);

// let remotelyDisable = (obj) => {
//     obj.disabled = true;
// };

// remotelyDisable(spaceship);

// console.log(spaceship);

//----------------------------------------------------------

// Looping through objects
let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() {
                console.log('You got this!');
            },
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() {
                console.log('I agree, captain!');
            },
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() {
                console.log(`Jets on!`);
            },
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() {
                console.log('The tank is full!');
            },
        },
    },
};

// for...in
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
    console.log(
        `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
    );
}

//---------------------------------------------------------
