// Scope

// An important idea in programming is scope. Scope defines where variables can be accessed or referenced. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

// You can think of scope like the view of the night sky from your window. Everyone who lives on the planet Earth is in the global scope of the stars. The stars are accessible globally. Meanwhile, if you live in a city, you may see the city skyline or the river. The skyline and river are only accessible locally in your city, but you can still see the stars that are available globally.

// Over the next few exercises, we’ll explore how scope relates to variables and learn best practices for variable declaration.

// Blocks and Scope
// Before we talk more about scope, we first need to talk about blocks.

// We’ve seen blocks used before in functions and if statements. A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

// A block of code could be a function, like this:

// const logSkyColor = () => {
//     let color = 'blue';
//     console.log(color); // blue
// };

// logSkyColor();

// Global Scope

// Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

// In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

// const color = 'blue';

// const returnSkyColor = () => {
//     return color; // blue
// };

// console.log(returnSkyColor()); // blue

// // Another example
// const satellite = 'The Moon';

// const galaxy = 'The Milky Way';

// const stars = 'North Star';

// function callMyNightSky() {
//     return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// }

// console.log(callMyNightSky());

// Block Scope

// The next context we’ll cover is block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

// Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

// const logSkyColor = () => {
//   let color = 'blue';
//   console.log(color); // Prints "blue"
// };

// logSkyColor(); // Prints "blue"
// console.log(color); // throws a ReferenceError

// Scope Pollution

// It may seem like a great idea to always make your variables accessible, but having too many global variables can cause problems in a program.

// When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

// Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

// Let’s look at an example of scope pollution in practice so we know how to avoid it:

// let num = 50;

// const logNum = () => {
//   num = 100; // Take note of this line of code
//   console.log(num);
// };

// logNum(); // Prints 100
// console.log(num); // Prints 100

//-----------------------------------------------------------------

// Global Scope
// let dusk = true;

// if (dusk) {
//     let color = 'pink';
//     console.log(color); // pink
// }

//----------------------------------------------------------------

// Global Scope
// const city = 'New York City';

// function logCitySkyline() {
//     let skyscraper = 'Empire State Building';
//     return 'The stars over the ' + skyscraper + ' in ' + city;
// }

// console.log(logCitySkyline());

//----------------------------------------------------------------

// Local Scope
// function logVisibleLightWaves() {
//     const lightWaves = 'Moonlight';
//     console.log(lightWaves);
// }

// logVisibleLightWaves();

//----------------------------------------------------------------

// const logSkyColor = () => {
//   const dusk = true;
//   let color = 'blue';
//   if (dusk) {
//     let color = 'pink';
//     console.log(color); // Prints "pink"
//   }
//   console.log(color); // Prints "blue"
// };

// console.log(color); // throws a ReferenceError

//-----------------------------------------------------------------

// const logVisibleLightWaves = () => {
//     let lightWaves = 'Moonlight';
//     let region = 'The Arctic';
//     // Add if statement here:
//     if (region === 'The Arctic') {
//         let lightWaves = 'Northern Lights';
//         console.log(lightWaves);
//     }
//     console.log(lightWaves);
// };

// logVisibleLightWaves();

//-----------------------------------------------------------------

// Out of scope

// let userLoggedIn = true;

// if (userLoggedIn) {
//     let welcomeMessage = 'Welcome back!';
// } else {
//     let welcomeMessage = 'Welcome new user!';
// }

// console.log(welcomeMessage); // throws an error

// In scope

let userLoggedIn = true;
let welcomeMessage = ''; // declare the variable here

if (userLoggedIn) {
    welcomeMessage = 'Welcome back!'; // modify the outer variable
} else {
    welcomeMessage = 'Welcome new user!'; // modify the outer variable
}

console.log(welcomeMessage); // prints 'Welcome back!'

//------------------------------------------------------------
