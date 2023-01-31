function factorial(num){
    let x = 1;
    let totalMultiple = 1;
    while(x<=num){
        totalMultiple = totalMultiple * x;
        x++
    }
    return totalMultiple;
}

const result = factorial(9);
console.log(result);



// while loop reverse way to find factorial
function reverseFactorial(num){
    let x = num;
    let multiple = 1;
    while(x>=1){
        multiple = multiple * x;
        x--
    }
    return multiple;
}

const reverseResult = reverseFactorial(9);
console.log(reverseResult);