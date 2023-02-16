console.log(5>6); //5 কি 6  এর থেকে বড় ?
// false

console.log(5<6); //5 কি 6  এর থেকে ছোট ?
// true

console.log(5==6); //5 কি 6  এর সমান ?
// false

console.log(6==6); //6 কি 6  এর সমান ?
// true

console.log(5>=8); //5 কি 6  এর থেকে বড় অথবা সমান ?
// false

console.log(5<=8); //5 কি 6  এর থেকে ছোট অথবা সমান ?
// true

console.log(6!=5); // 6 কি 5 এর সমান নয় ?
// true


// multiple comparison__________________
// && == and এবং  সবগুলো শর্ত সত্যি হতে হবে। 
// ।। == or অথবা  সবগুলো শর্ত সত্যি না হয়ে যেকোনো একটি শর্ত পূরন হলেই হবে। 
var num1 = 35;
var num2 = 40;

var firstCondition = num1 < num2 && num2 == num1; 
console.log(firstCondition);
// false

var secondCondition = num1 < num2 || num2 == num1; 
console.log(secondCondition);
// true

