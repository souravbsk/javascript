// second largest number 
function secondLargest(numbers){
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (number > largest) {
            secondLargest = largest;
            largest = number;
        } else if (number > secondLargest) {
            secondLargest = number;
        }
    }
return secondLargest



    
}
secondLargest([10,33,5,99,6,85])


/* 
// second way to find second largest number 
    const secondLargest = numbers.sort(function(a,b){return b-a})
    console.log(secondLargest[1]);
*/


let num = "02638303737300073730";
let zeroCount = (num.match(/0/g) || []).length;
console.log(zeroCount);