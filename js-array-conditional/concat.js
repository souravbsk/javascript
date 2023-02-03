const array1 = [10,20,30,40,50];
const array2 = ['a','b','c','d','e'];
const array3 = ['x','y','z'];

const newArray = array1.concat(array2,array3);

console.log(newArray);

/* output
[
  10,  20,  30,  40,  50, 
  'a', 'b', 'c', 'd', 'e',
  'x', 'y', 'z'
]
*/



// concat use for string 
let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2);
console.log(result);

// Hello world!