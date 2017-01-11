let reverse = require('./q1/reverse.js');
let isSquare = require('./q2/is-square.js');
let arrayMerge = require('./q3/array-merge.js');
let findWord   = require('./q4/find-word.js');
let sum = require('./q5/sum.js');

console.log(reverse('hello'));

console.log(isSquare(1));
console.log(isSquare(16));
console.log(isSquare(14));

// Insert before
console.log(arrayMerge([
    [3,5],[9,12],[16,18],[20,22]
  ], 
    [1,2]
));

// Insert after
console.log(arrayMerge([
    [3,5],[9,12],[16,18],[20,22]
  ], 
    [23,24]
));

// Insert in interval
console.log(arrayMerge([
    [3,5],[9,12],[16,18],[20,22]
  ], 
    [13,15]
));

// Merge one interval
console.log(arrayMerge([
    [3,5],[9,12],[16,18],[20,22]
  ], 
    [10,15]
));

// Merge two intervals
console.log(arrayMerge([
    [3,5],[9,12],[16,18],[20,22]
  ], 
    [10,21]
));

console.log(findWord([
    ['A','B','C','E'], 
    ['S','F','C','S'], 
    ['A','D','E','E']
  ], 
    "ABCCED"
));

console.log(findWord([
    ['A','B','C','E'], 
    ['S','F','C','S'], 
    ['A','D','E','E']
  ], 
    "SEE"
));

console.log(findWord([
    ['A','B','C','E'], 
    ['S','F','C','S'], 
    ['A','D','E','E']
  ], 
    "ABCB"
));

console.log(sum(1, 0));
console.log(sum(0, 6));
// Error
console.log(sum(1, 2));
