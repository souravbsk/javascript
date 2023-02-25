// function deceleration 
function add1 (num1,num2){
const total = num1 + num2;
console.log(total)
}
add1(5,8)


// function expression 
const add2 = function add2 (num1,num2){
    const total = num1 + num2;
    console.log(total)
}
add2(5,6)

// function expression with anonymous
const add3 = function(num1,num2){
    const total = num1 + num2;
    console.log(total)
}
add2(5,6)


// arrow function 
const add4 = (num1,num2) => num1 + num2;
console.log(add4(8,6))
// 14

// arrow function with multiple line 
const add5 = (num1,num2) => {
    return num1 + num2;
}
console.log(add5(20,23))
