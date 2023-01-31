/***
 * 1! = 1
 * 2! = 2*1
 * 3! = 3*2*1
 * 4! = 4*3*2*1
 * 5! = 5*4*3*2*1
 * 
 *  */  

function factorial(num){
    let multiple = 1;
    for(let i = 1; i<=num; i++){
        multiple = multiple  * i;
    }
    return multiple;
}
const result = factorial(9);
console.log(result);



// reverse way to calculate factorial 
function reverseFactorial ( num){
    let totalMultiple = 1;
    for(let i = num; i >= 1; i--){
        totalMultiple = totalMultiple * i;
    }
    return totalMultiple;
}

const reverseResult = reverseFactorial(9);
console.log(reverseResult);
