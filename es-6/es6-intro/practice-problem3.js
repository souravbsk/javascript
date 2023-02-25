/* 
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
*/

const number = [81,16,64,36,25];

const averageSum = (numbers) => {
    let sumResult = 0;
    for(const number of numbers){
        const squrareNumber = Math.sqrt(number);
        sumResult += squrareNumber;
    }
    const numberLength = numbers.length;
    return sumResult / numberLength;
   
}
const averageResult = averageSum(number);
console.log(averageResult)
// 6.4