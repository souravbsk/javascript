const biggest = Math.max(25,45,87,66,5);
console.log(biggest)
// 87

const evenNumber = [12,2,4,16,84,18,64];
const smallestNumber = Math.min(...evenNumber);
// console.log(smallestNumber)
// 2

const oddNumber = [3,13,15,25,17];
const largestNumber = Math.max(...oddNumber);
console.log(largestNumber)
// 25


const number = [2,5,4,1,6,25,4,85,63,47,58,56];
const number1 = [...number,80,58];
const number2 = [25,85,...number,65,63];
console.log(number)
/* 
[
   2,  5,  4,  1,  6,
  25,  4, 85, 63, 47,
  58, 56
]
*/

console.log(number1)
/* 
[
    2,  5,  4,  1,  6, 25,
    4, 85, 63, 47, 58, 56,
   80, 58
 ]
*/

console.log(number2)
/* 
[
  25, 85,  2,  5,  4,  1,
   6, 25,  4, 85, 63, 47,
  58, 56, 65, 63
]
*/



const age = [25,45,69,2,5];
const age1 = [45,8,69,86];
const newAge = [...age,...age1]
console.log(newAge)
/* [
    25, 45, 69,  2, 5,
    45,  8, 69, 86
  ] */


//   the javascript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object 


const circle = {
  radius:10,
 };
 const style = {
   backgroundColor:'red',
   color: 'red'
 };
 const teamPlayer = {...circle,...style}
 console.log(teamPlayer)
//  { radius: 10, color: 'red', backgroundColor: 'red' }



const plyers = {
  name:'neymar',
  age:29,
  job: 'footballer',
  target:'fifa'
}
const {name,...others} = plyers;
console.log(others)
// { age: 29, job: 'footballer', target: 'fifa' }