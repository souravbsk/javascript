var first = 54;
var second = 65;
console.log(first,second);
// 54 65


// swap 
/* 
var third = first;
first = second;
second = third;
console.log(first, second);
 */
// 65 54


// distrusting way to swap 
// [second,first] = [first,second];
// console.log(first,second);
// 65 54


// approach 3

var third = first + second;
second = third - second;
first = third - second;
console.log(first,second);
// 65 54