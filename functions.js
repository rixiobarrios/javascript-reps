//FUNCTIONS

// Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

// function square(number) {
//     return number * number;
// }

// console.log(square(9));

// Calculator: Coin Combination

// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

// let coins = [];
// coins[0] = 'pennies'; // $00.01
// coins[1] = 'nickles'; // $00.05
// coins[2] = 'dimes'; // $00.10
// coins[3] = 'quarters'; // $00.25

// console.log(coins);

// function coinCombo(cents) {
//     if (cents === 1) {
//         coins.splice(0, 1, 1);
//     }
//     if (cents === 5) {
//         coins.splice(1, 1, 1);
//     }
//     if (cents === 10) {
//         coins.splice(2, 1, 1);
//     }
//     if (cents === 25) {
//         coins.splice(3, 1, 1);
//     } else {
//         coins.splice(0, 1, 0);
//     }
//     return coins;
// }

// console.log(coinCombo(1));

//---------------------------------------------------------------

// // Without a function / Can't reuse
// const width = 10;
// const height = 6;
// const area = width * height;
// console.log(area); // Output: 60

// // Wth function / reusable
// function areaOfTriangle(width, height) {
//     return width * height;
// }

// // Use 1
// console.log(areaOfTriangle(10, 6)); // Output: 60
// // Use 2
// console.log(areaOfTriangle(10, 5)); // Output: 50
// // Use 3
// console.log(areaOfTriangle(10, 4)); // Output: 40

//--------------------------------------------------------------

// const flowers = ['peony', 'daffodil', 'marigold'];

// function addFlower(arr) {
//     arr.push('lily');
// }

// addFlower(flowers);

// console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

//----------------------------------------------------------

// const concept = ['arrays', 'can', 'be', 'mutated'];

// function changeArr(arr) {
//     arr[3] = 'MUTATED';
// }

// changeArr(concept);

// console.log(concept);

// function removeElement(newArr) {
//     newArr.pop();
// }

// removeElement(concept);

// console.log(concept);

//----------------------------------------------------------

const sendWelcomeMessageToUser = (user) => {
    if (user.online) {
        if (user.accountType === 'normal') {
            console.log('Hello ' + user.name + '!');
        } else {
            console.log('Welcome back premium user ' + user.name + '!');
        }
    }
};

sendWelcomeMessageToUser(firstUser);
sendWelcomeMessageToUser(secondUser);
sendWelcomeMessageToUser(thirdUser);

//-----------------------------------------------------------
