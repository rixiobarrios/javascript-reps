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

// // Looping through objects
// let spaceship = {
//     crew: {
//         captain: {
//             name: 'Lily',
//             degree: 'Computer Engineering',
//             cheerTeam() {
//                 console.log('You got this!');
//             },
//         },
//         'chief officer': {
//             name: 'Dan',
//             degree: 'Aerospace Engineering',
//             agree() {
//                 console.log('I agree, captain!');
//             },
//         },
//         medic: {
//             name: 'Clementine',
//             degree: 'Physics',
//             announce() {
//                 console.log(`Jets on!`);
//             },
//         },
//         translator: {
//             name: 'Shauna',
//             degree: 'Conservation Science',
//             powerFuel() {
//                 console.log('The tank is full!');
//             },
//         },
//     },
// };

// // for...in
// for (let crewMember in spaceship.crew) {
//     console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }

// for (let crewMember in spaceship.crew) {
//     console.log(
//         `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
//     );
// }

//---------------------------------------------------------

// const robot = {
//     model: 'B-4MI',
//     mobile: true,
//     greeting() {
//         console.log(`I'm model ${this.model}, how may I be of service?`);
//     },
// };

// const massProdRobot = (model, mobile) => {
//     return {
//         model,
//         mobile,
//         greeting() {
//             console.log(`I'm model ${this.model}, how may I be of service?`);
//         },
//     };
// };

// const shinyNewRobot = massProdRobot('TrayHax', true);

// const chargingStation = {
//     _name: 'Electrons-R-Us',
//     _robotCapacity: 120,
//     _active: true,
//     _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

//     set robotCapacity(newCapacity) {
//         if (typeof newCapacity === 'number') {
//             this._robotCapacity = newCapacity;
//         } else {
//             console.log(`Change ${newCapacity} to a number.`);
//         }
//     },
//     get robotCapacity() {
//         return this._robotCapacity;
//     },
// };

//----------------------------------------------------------

// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//         console.log('baaa');
//     },
// };

//goat.makeSound(); // Prints baaa

//----------------------------------------------------------

// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//         console.log('baaa');
//     },
//     diet() {
//         console.log(dietType);
//     },
// };
// goat.diet();
// Output will be "ReferenceError: dietType is not defined"

// Add "this"
// The this keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.

// const goat = {
//   dietType: 'herbivore',
//   makeSound() {
//     console.log('baaa');
//   },
//   diet() {
//     // The "this" keyword has been added
//     console.log(this.dietType);
//   }
// };

// goat.diet();
// Output: herbivore

//----------------------------------------------------------

// const robot = {
//     model: '1E78V2',
//     energyLevel: 100,
//     provideInfo() {
//         return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
//     },
// };

// console.log(robot.provideInfo());

//-----------------------------------------------------------

// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//         console.log('baaa');
//     },
//     diet: () => {
//         console.log(this.dietType);
//     },
// };

// goat.diet(); // Prints undefined

// The key takeaway from the example above is to avoid using arrow functions when using this in a method!

//----------------------------------------------------------

// const robot = {
//   energyLevel: 100,
//   checkEnergy: () => {
//     console.log(`Energy is currently at ${this.energyLevel}%.`)
//   }
// }

// robot.checkEnergy(); // Outputs "Energy is currently at undefined%."

// Refactor to fix

// const robot = {
//     energyLevel: 100,
//     checkEnergy() {
//         console.log(`Energy is currently at ${this.energyLevel}%.`);
//     },
// };

// robot.checkEnergy(); // Outputs "Energy is currently at 100%."

//-----------------------------------------------------------

// Privacy

// Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

// Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.

// const bankAccount = {
//     _amount: 1000,
// };

// // In the example above, the _amount is not intended to be directly manipulated.

// // Even so, it is still possible to reassign _amount:

// bankAccount._amount = 1000000;

//----------------------------------------------------------

// const robot = {
//     _energyLevel: 100,
//     recharge() {
//         this._energyLevel += 30;
//         console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
//     },
// };

// robot._energyLevel = 'high'; // Side-effect of type-coercion

// robot.recharge(); // Outputs "Recharged! Energy is currently at high30%."

// Avoid side-effects by checking for type of value

// const robot = {
//     _model: '1E78V2',
//     _energyLevel: 100,
//     get energyLevel() {
//         if (typeof this._energyLevel == 'number') {
//             return `My current energy level is ${this._energyLevel}`;
//         } else {
//             return 'System malfunction: cannot retrieve energy level';
//         }
//     },
// };

// console.log(robot.energyLevel);

//---------------------------------------------------------

// Getters

// Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let’s take a look at a getter method:

// const person = {
//     _firstName: 'John',
//     _lastName: 'Doe',
//     get fullName() {
//         if (this._firstName && this._lastName) {
//             return `${this._firstName} ${this._lastName}`;
//         } else {
//             return 'Missing a first name or a last name.';
//         }
//     },
// };

// // To call the getter method:
// person.fullName; // 'John Doe'

//----------------------------------------------------------

// Setters

// Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. Let’s see an example of a setter method:

// const person = {
//     _age: 37,
//     set age(newAge) {
//         if (typeof newAge === 'number') {
//             this._age = newAge;
//         } else {
//             console.log('You must assign a number to age');
//         }
//     },
// };

// console.log(person._age);

// person.age = 40;

// console.log(person._age);

// person.age = 'Fifty';

// console.log(person._age);

//---------------------------------------------------------

// const robot = {
//     _model: '1E78V2',
//     _energyLevel: 100,
//     _numOfSensors: 15,
//     get numOfSensors() {
//         if (typeof this._numOfSensors === 'number') {
//             return this._numOfSensors;
//         } else {
//             return 'Sensors are currently down.';
//         }
//     },
//     set numOfSensors(num) {
//         if (typeof num === 'number' && num >= 0) {
//             return (this._numOfSensors = num);
//         } else {
//             console.log('Pass in a number that is greater than or equal to 0');
//         }
//     },
// };

// robot.numOfSensors = 100;

// console.log(robot.numOfSensors);

// robot.numOfSensors = -5;

// console.log(robot.numOfSensors);

//-----------------------------------------------------------

// Factory Functions

// So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly. Here’s where factory functions come in. A real world factory manufactures multiple copies of an item quickly and on a massive scale. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

// Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different types of monsters and we could go about making each monster individually but we can also use a factory function to make our lives easier. To achieve this diabolical plan of creating multiple monsters objects, we can use a factory function that has parameters:

// const monsterFactory = (name, age, energySource, catchPhrase) => {
//     return {
//         name: name,
//         age: age,
//         energySource: energySource,
//         scare() {
//             console.log(catchPhrase);
//         },
//     };
// };

// In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

// const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
// ghost.scare(); // 'BOO!'

//---------------------------------------------------------

// const robotFactory = (model, mobile) => {
//     return {
//         model: model,
//         mobile: mobile,
//         beep() {
//             console.log('Beep Boop');
//         },
//     };
// };

// const tinCan = robotFactory('P-500', true);

// tinCan.beep();

//----------------------------------------------------------

// Property Value Shorthand

// ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.

// In the previous exercise, we created a factory function that helped us create objects. We had to assign each property a key and value even though the key name was the same as the parameter name we assigned to it. To remind ourselves, here’s a truncated version of the factory function:

// const monsterFactory = (name, age) => {
//     return {
//         name: name,
//         age: age,
//     };
// };

// Imagine if we had to include more properties, that process would quickly become tedious! But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes. The example below works exactly like the example above:

// const monsterFactory = (name, age) => {
//     return {
//         name,
//         age,
//     };
// };

//----------------------------------------------------------

// const robotFactory = (model, mobile) => {
//     return {
//         model,
//         mobile,
//         beep() {
//             console.log('Beep Boop');
//         },
//     };
// };

// // To check that the property value shorthand technique worked:
// const newRobot = robotFactory('P-501', false);
// console.log(newRobot.model);
// console.log(newRobot.mobile);

//--------------------------------------------------------
