function isBigger(num) {
    if(num > 5){
        return true;
    }
    else{
        return false
    }
}
// } SyntaxError: Unexpected token '}'

const result = isBigger(11);
console.log(result);


// const sum = a,b => a+b;   //SyntaxError: Missing initializer in const declaration
const sum = (a,b) => a+b; 


// const musk = {
//     neame: 'elon',
//     age:53
//     job:'tesla'
// } SyntaxError: Unexpected identifier 'job'
const musk = {
    neame: 'elon',
    age:53,
    job:'tesla'
}
console.log(musk); 


// const number = [25,45,68,95,57 15,75] //SyntaxError: Unexpected number
const number = [25,45,68,95,57, 15,75]
console.log(number);


for (let i = 0; i < 10; i++) {
    // const n = i[i;
    const n = i[i];
    
}


// console.log('hello'; SyntaxError: missing ) after argument list
console.log('hello');


/* if(number.length > 5) && (number[0] ===5){
    // SyntaxError: Unexpected token '&&'
}  */
if(number.length > 5 && number[0] ===5){
    
} 

