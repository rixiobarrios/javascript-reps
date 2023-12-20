// Nested arrays

// An Array can have one or more inner Arrays. These nested array (inner arrays) are under the scope of outer array means we can access these inner array elements based on outer array object name.

// let favMovies = [
//     'Begin Again',
//     'Soul',
//     ['Matrix', 'Matrix Reloaded', 'Matrix Revolutions'],
//     ['Frozen', 'Frozen 2', ['Tangled', 'Alladin']],
// ];

// console.log(favMovies[0]); // 'Begin Again'
// console.log(favMovies[1]); // 'Soul'
// console.log(favMovies[2][0]); // 'Matrix'
// console.log(favMovies[2][1]); // 'Matrix Reloaded'
// console.log(favMovies[2][2]); // 'Matrix Revolutions'
// console.log(favMovies[3][0]); // 'Frozen'
// console.log(favMovies[3][1]); // 'Frozen 2'
// console.log(favMovies[3][2][0]); // 'Tangled'
// console.log(favMovies[3][2][1]); // 'Alladin'

//------------------------------------------------------------

// const nestedArr = [[1], [2, 3]];

// console.log(nestedArr[1]); // Output: [2, 3]

// console.log(nestedArr[1][0]); // Output: 2

//-----------------------------------------------------------

let numberClusters = [
    [1, 2],
    [3, 4],
    [5, 6],
];

const target = numberClusters[2][1]; // 6

console.log(target);
