
const number = [5,8,6,9,7,2,4];
//.reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters (previous, current)
// Syntax

// single line 
const total1 = number.reduce((previousValue,currentValue) => previousValue + currentValue,0);
console.log(total1)
// 41

// multiline 
const total = number.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
},0)
console.log(total)
// 41


const product = [
    {name:'phone',price:23,color:'sliver'},
    {name:'watch',price:13,color:'gold'},
    {name:'tablet',price:3,color:'white'},
    {name:'computer',price:53,color:'gold'},
]

const sumTotal = (previousPrice,currentPrice) => previousPrice + currentPrice.price;
const productTotal = product.reduce(sumTotal,0)
console.log(productTotal)
// 92



const marks = [1,2,3,4,5,6];
const totalMarks =marks.reduce((previousValue,currentValue) => previousValue - currentValue,1);
console.log(totalMarks)
// -20