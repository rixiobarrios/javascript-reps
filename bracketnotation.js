// Bracket notation

// In the object[expression] syntax, the expression should evaluate to a string or Symbol that represents the property's name. So, it can be any string literal, for example, including '1foo', '!bar!', or even ' ' (a space).

// const obj = {
//     name: 'deeecode',
//     age: 80,
//     language: 'javascript',
// };

// const target = obj['name'];
// // deeecode

//--------------------------------------------------------------

// let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// condiments[0] = 'Mayo';

// console.log(condiments);

// condiments = ['Mayo'];

// console.log(condiments);

// utensils[3] = 'Spoon';

// console.log(utensils);

//---------------------------------------------------------

// let vacationSpots = ['mars', 'venus', 'saturn'];

// console.log(vacationSpots[0]);
// console.log(vacationSpots[1]);
// console.log(vacationSpots[2]);

//----------------------------------------------------------

// let spaceship = {
//     'Fuel Type': 'Turbo Fuel',
//     'Active Duty': true,
//     homePlanet: 'Earth',
//     numCrew: 5,
// };

// console.log(spaceship['Active Duty']); // Returns true
// console.log(spaceship['Fuel Type']); // Returns  'Turbo Fuel'
// console.log(spaceship['numCrew']); // Returns 5
// console.log(spaceship['!!!!!!!!!!!!!!!']); // Returns undefined

// // With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:

// let returnAnyProp = (objectName, propName) => objectName[propName];

// console.log(returnAnyProp(spaceship, 'homePlanet')); // Returns 'Earth'

// let propName = 'Active Duty';

// // Write your code below
// let isActive = spaceship['Active Duty'];

// console.log(isActive);

// console.log(spaceship[propName]);

//-----------------------------------------------------------

// Bracket notation vs dot notation

let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'silver',
    'Secret Mission': 'Discover life outside of Earth.',
};

// Write your code below
spaceship.color = 'glorious gold';

spaceship.numEngines = 6;

delete spaceship['Secret Mission'];

console.log(spaceship);

//----------------------------------------------------------
