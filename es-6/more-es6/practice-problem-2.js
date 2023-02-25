/* 
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/

// reduce 
const numbers = [ 1, 9, 17, 22 ];

const total = numbers.reduce((previousValue,currentValue)=> previousValue + currentValue,0);
console.log(total)

// 49
let output = 0;
for(const num of numbers){
    output += num;
}
console.log(output)