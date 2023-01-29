var number = [2,5,7,8,6,3];
// [ 2, 5, 7, 8, 6, 3 ]

// using unshift() add an element to the beginning of an array 
number.unshift(68);
console.log(number);
// [68, 2, 5, 7, 8, 6, 3]
number.unshift(25,35);
console.log(number);
// [25, 35, 2, 5, 7,  8, 6, 3]


// shift remove an element to the beginning of an array

var marks = [45,215,86,79,36,46,58];
marks.shift();
console.log(marks);
// [ 215, 86, 79, 36, 46, 58 ]


// remove an Element to the beginning of an array and store it a varriable 
var shiftItem = marks.shift();
console.log(shiftItem);
// 215
