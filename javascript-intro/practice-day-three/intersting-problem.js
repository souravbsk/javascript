const number = 25410658901452;

let newNum;

let num = 0
if (number % 10 === 0) {

    num++
}


function getSecondLargest(nums) {
    // Complete the function
    let largeNum = nums[0];
    let secondLargeNum;
    for (const num of nums) {
        if (num > largeNum) {
            secondLargeNum = largeNum;
            largeNum = num;
        }
        else if (num > secondLargeNum) {
            secondLargeNum = num;
        }
        else if (largeNum < secondLargeNum) {
            secondLargeNum = secondNum
        }
    }
   return secondLargeNum
}
const myNum = [2, 3, 6, 5];
const secondNum = getSecondLargest(myNum);
console.log(secondNum)
