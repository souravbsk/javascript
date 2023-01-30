var number = [1,3,4,5,6,9,7,2,5];
console.log(number.slice(2));
// [4, 5, 6, 9, 7, 2, 5]

console.log(number.slice(2,3));
//[4]

console.log(number.slice(3,7));
// [ 5, 6, 9, 7 ]

console.log(number.slice(-1));
// [5]

console.log(number.slice(-3));
// [ 7, 2, 5 ]

console.log(number.slice(2,-2));
// [ 4, 5, 6, 9, 7 ]

console.log(number.slice(4,-2));
// [ 6, 9, 7 ]