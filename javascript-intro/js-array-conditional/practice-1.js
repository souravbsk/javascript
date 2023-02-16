var fruits = ['apple','banana','orange'];

/* 
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/
var banansPositon = fruits.indexOf('banana');
console.log(banansPositon);
// 1

// replace banana with mango 
fruits[1] = 'mango';
console.log(fruits);
// [ 'apple', 'mango', 'orange' ]


// remove orange 
fruits.pop();
console.log(fruits);
// [ 'apple', 'mango' ]

// add watermelon
fruits.push('watermelon');
console.log(fruits);
// [ 'apple', 'mango', 'watermelon' ]