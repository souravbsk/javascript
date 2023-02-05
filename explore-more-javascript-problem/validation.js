function validation(num1,num2){
    if(typeof num1 === 'number' || typeof num2 === 'number'){
        return 'please enter a number'
    }
    return num1 + num2
}
const result = validation(10 , '25');
console.log(result);
// please enter a number






function multiply(num1, num2){
    return num1*num2;
}
const output = multiply(5+6);
console.log(output);
// NaN