// pow property use check power
// const power = Math.pow(base,power) 
const power = Math.pow(5,2);
console.log(power); 
// 25



// abs use to absolute number 
const fistPerson = 25;
const secondPerson = 50;
const gap = fistPerson - secondPerson;
console.log(gap);
// -25 (without abs )

const absoluteNumber = Math.abs(gap);
console.log(absoluteNumber);
// 25 (with abs)

if(gap<5){
    console.log('you can be friend');
}
else{
    console.log('you can not be a friend');
}
// before abs output 
    // you can be friend
// after abs output 
    // you can not be a friend




// a decimal number we can make it round figure with round depend after decimal number
   
const decimalNumber = 2.56;
const decimalNumber2 = 2.444;
console.log(Math.round(decimalNumber));
// 3

console.log(Math.round(decimalNumber2));
// 2


// floor  using 
const number1 = 3.2;
console.log(Math.floor(number1));
// 3

// ceil using
const number2 = 3.2;
console.log(Math.ceil(number2));
// 4


// random 

console.log(Math.random());
// 0.006131940675976777
// 0.4008119609109111


for(let i = 0; i<=6; i++){
    console.log(Math.round(Math.random()*6));
}
/* 
6
5
2
2
2
6 */


// max using to find a biggest number 
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3




// min using to find lowest number 
console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const minArr = [2, 3, 1];

console.log(Math.min(...minArr));
// Expected output: 1
