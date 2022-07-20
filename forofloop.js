// FOR OF LOOP:

// A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

// Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.

const arr = [3, 5, 7];
arr.foo = 'hello';

for (const i in arr) {
    console.log(i); // logs "0", "1", "2", "foo"
}

for (const i of arr) {
    console.log(i); // logs 3, 5, 7
}
