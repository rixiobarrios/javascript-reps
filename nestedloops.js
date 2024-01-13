// Nested Loops

// When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

// Let’s look at an example of a nested for loop:

// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < yourArray.length; j++) {
//         if (myArray[i] === yourArray[j]) {
//             console.log('Both arrays have the number: ' + yourArray[j]);
//         }
//     }
// }

//-----------------------------------------------------------

// const create2Darr = (rows, columns) => {
//     let arr = [];
//     let value = 0;

//     // creating two-dimensional array
//     for (let i = 0; i < rows; i++) {
//         arr[i] = [];
//         for (let j = 0; j < columns; j++) {
//             arr[i][j] = value++;
//         }
//     }
//     console.log(arr);
// };

// let rows = 4;
// let columns = 3;
// create2Darr(rows, columns);

// Create a for Loop--------------------------------------------

// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// let i, j, asterisk;
// for (i = 1; i <= 6; i++) {
//     for (j = 1; j < i; j++) {
//         asterisk = asterisk + '*';
//     }
//     console.log(asterisk);
//     asterisk = '';
// }

//Fixed undefined on return

// let i, j;
// let asterisk = [];
// let index = 0;

// for (i = 0; i <= 4; i++) {
//     for (let j = 0; j <= index; j++) {
//         asterisk.push('*');
//         index + 1;
//     }
//     console.log(asterisk.join(' '));
// }

// Create a for Loop--------------------------------------------

// Write your code below
let bobsFollowers = ['Bill', 'Brian', 'Beth', 'Barb'];
let tinasFollowers = ['Sandra', 'Beth', 'Barb'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] == tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);
            console.log(mutualFollowers);
        }
    }
}

//------------------------------------------------------------
