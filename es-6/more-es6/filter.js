const numbers = [25,45,36,9,85,28,25,36,4,78,25]
const bigNums = numbers.filter(number => number > 20);
console.log(bigNums)
// [25, 45, 36, 85, 28, 25, 36, 78, 25 ]

const smallNums = numbers.filter(number => number < 20);
console.log(smallNums)
// [ 9, 4 ]

const evenNumber  = numbers.filter(number => number % 2 === 0);
console.log(evenNumber)
// [ 36, 28, 36, 4, 78 ]

const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers)
// [ 25, 45, 9, 85, 25, 25 ]



const shopping =[
    {name:'phone',price:23000,color:'sliver'},
    {name:'watch',price:13000,color:'black'},
    {name:'tablet',price:3000,color:'white'},
    {name:'computer',price:53000,color:'gray'},
]

const highPriceProduct = shopping.filter(product => product.price < 15000);
console.log(highPriceProduct)

/* 
[
  { name: 'watch', price: 13000, color: 'black' },
  { name: 'tablet', price: 3000, color: 'white' }
]
*/


const goldProduct = shopping.filter(product => product.color === 'gold');
console.log(goldProduct)
// []