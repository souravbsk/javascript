/* Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
 */


const numberOne = [5,15,36,42,58,25];
const numberTwo = [85,12,24,36,54];

const maxNumber = (numArrayOne, numArrayTwo) => {
     const newArray = [...numArrayOne,...numArrayTwo];
     const maxNum = Math.max(...newArray);
     return maxNum;
}
const maxNumResult = maxNumber(numberOne,numberTwo);
console.log(maxNumResult)