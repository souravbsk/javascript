/* 
1) Write an arrow function that will take 3 parameters, will multiply
   the parameters and will return the result.
*/

const multiply = (num1,num2,num3) => num1 * num2 * num3;
const  multiplyResult = multiply(5,3,2);
console.log(multiplyResult)
// 30


/* 
2) Write the following sentence in three lines and print the result:
    I am a web developer. I love to code. I love to eat biryani.
*/

const sentence = `
Iam a web developer.
I love to code.
I love to eat biriyani
`
console.log(sentence)

/* 
Iam a web developer.
I love to code.
I love to eat biriyani
*/


/* 
3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
*/

const adding = (num1, num2 = 10) => num1 + num2;
const addingResult = adding(20);
console.log(addingResult)
// 30