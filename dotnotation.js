// Dot notation

// In the object.propertyName syntax, the propertyName must be a valid JavaScript identifier which can also be a reserved word. For example, object.$1 is valid, while object.1 is not.

// const obj = {
//     name: 'deeecode',
//     age: 80,
//     language: 'javascript',
// };

// const target = obj.name;
// // deeecode

//-------------------------------------------------------------

// Property dot notation
// console.log('hello'.length); // Returns 5

//-------------------------------------------------------------

// let spaceship = {
//     homePlanet: 'Earth',
//     color: 'silver',
// };
// console.log(spaceship.homePlanet); // Returns 'Earth',
// console.log(spaceship.color); // Returns 'silver',

//------------------------------------------------------------

// let spaceship = {
//     homePlanet: 'Earth',
//     color: 'silver',
//     'Fuel Type': 'Turbo Fuel',
//     numCrew: 5,
//     flightPath: ['Venus', 'Mars', 'Saturn'],
// };

// // Write your code below
// let crewCount = spaceship.numCrew;
// let planetArray = spaceship.flightPath;

// console.log(crewCount);
// console.log(planetArray);

//-----------------------------------------------------------

// Add or change properties
// const spaceship = { type: 'shuttle' };

// spaceship = { type: 'alien' }; // TypeError: Assignment to constant variable.

// let spaceship = { type: 'shuttle' };
// spaceship.type = 'alien'; // Changes the value of the type property

// spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

// console.log(spaceship);

//----------------------------------------------------------

// You can delete a property from an object with the delete operator.

// const spaceship = {
//     'Fuel Type': 'Turbo Fuel',
//     homePlanet: 'Earth',
//     mission: 'Explore the universe',
// };

// delete spaceship.mission; // Removes the mission property

// console.log(spaceship);

//----------------------------------------------------------

// Dot notation vs. bracket notation

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

//-----------------------------------------------------------
