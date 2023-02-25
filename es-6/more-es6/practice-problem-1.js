/* 
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/

const oddNumber = [ 1, 3, 5, 7, 9 ];
const evenNumber1 = oddNumber.map(number => number+1);
console.log(evenNumber1)
// [ 2, 4, 6, 8, 10 ]

for(const number of oddNumber){
    const evenNumber = number + 1;
    console.log(evenNumber)
}
/* 
2 
4 
6 
8 
10
*/


/* 
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
*/

const arrayNumber = [33, 50, 79, 78, 90, 101, 30 ];
const outPutNumber = arrayNumber.filter(number => number % 10 === 0);
console.log(outPutNumber)
// [ 50, 90, 30 ]




/* 
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/



const outPutNumberFind = arrayNumber.find(number => number % 10 === 0);
console.log(outPutNumberFind)
// 50