// switch

// The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.

// const expr = 'Papayas';
// switch (expr) {
//     case 'Oranges':
//         console.log('Oranges are $0.59 a pound.');
//         break;
//     case 'Mangoes':
//     case 'Papayas':
//         console.log('Mangoes and papayas are $2.79 a pound.');
//         // Expected output: "Mangoes and papayas are $2.79 a pound."
//         break;
//     default:
//         console.log(`Sorry, we are out of ${expr}.`);
// }

//------------------------------------------------------------------

// let athleteFinalPosition = 'first place';

// switch (athleteFinalPosition) {
//     case 'first place':
//         console.log('You get the gold medal!');
//         break;
//     case 'second place':
//         console.log('You get the silver medal!');
//         break;
//     case 'third place':
//         console.log('You get the bronze medal!');
//         break;
//     default:
//         console.log('No medal awarded.');
//         break;
// }

//--------------------------------------------------------------

// let userName = '';

// 'Jane' ? console.log('Hello, Jane!') : console.log('Hello!');

// let userQuestion = 'Am i good at nitrotype?';
// console.log(`Am i good at nitrotype?: ${userQuestion}`);

// const randomNumber = Math.floor(Math.random() * 8);
// let = '';
// switch (eightBall) {
//     case 0:
//         eightBall = 'It is certain';
//         break;
//     case 1:
//         eightBall = 'It is decidedly so';
//         break;
//     case 2:
//         eightBall = 'Reply hazy try again';
//         break;
//     case 3:
//         eightBall = 'Cannot predict now';
//         break;
//     case 4:
//         eightBall = 'Do not count on it';
//         break;
//     case 5:
//         eightBall = 'My sources say no';
//         break;
//     case 6:
//         eightBall = 'Outlook not so good';
//         break;
//     case 7:
//         eightBall = 'Signs point to yes';
//         break;
// }
// console.log(`The eight ball answered:
//  ${eightBall}`);
// var eightBall = '';
// console.log(eightBall);

//---------------------------------------------------------------

// let groceryItem = 'apple';

// switch (groceryItem) {
//     case 'tomato':
//         console.log('Tomatoes are $0.49');
//         break;
//     case 'lime':
//         console.log('Limes are $1.49');
//         break;
//     case 'papaya':
//         console.log('Papayas are $1.29');
//         break;
//     default:
//         console.log('Invalid item');
//         break;
// }

//-----------------------------------------------------------

let firstUser = {
    name: 'Will Alexander',
    age: 33,
    accountLevel: 'normal',
};

let secondUser = {
    name: 'Sarah Kate',
    age: 21,
    accountLevel: 'premium',
};

let thirdUser = {
    name: 'Audrey Simon',
    age: 27,
    accountLevel: 'mega-premium',
};

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}

//---------------------------------------------------------
