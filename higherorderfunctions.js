// Higher order functions

// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. There are several different types of higher order functions like map and reduce.

// const announceThatIAmDoingImportantWork = () => {
//     console.log('I’m doing very important work!');
// };

// const busy = announceThatIAmDoingImportantWork;

// busy(); // This function call barely takes any space!

//----------------------------------------------------------

// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//     for (let i = 1; i <= 1000000; i++) {
//         if (2 + 2 != 4) {
//             console.log('Something has gone very wrong :( ');
//         }
//     }
// };

// // Write your code below
// const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

// isTwoPlusTwo();

// console.log(isTwoPlusTwo.name);

// A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.

// When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses:

// const higherOrderFunc = (param) => {
//     param();
//     return `I just invoked ${param.name} as a callback function!`;
// };

// const anotherFunc = () => {
//     return "I'm being invoked by the higher-order function!";
// };

// higherOrderFunc(anotherFunc);

// console.log(higherOrderFunc(anotherFunc));

//-------------------------------------------------------------

const addTwo = (num) => {
    return num + 2;
};

const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
        return func(val);
    }
};

console.log(checkConsistentOutput(addTwo, 3));
