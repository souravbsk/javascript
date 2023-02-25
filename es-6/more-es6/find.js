const numbers = [25,45,36,9,85,28,25,36,4,78,25]
const bigNums = numbers.find(number => number > 20);
console.log(bigNums)
// 25

const shopping =[
    {name:'phone',price:23000,color:'sliver'},
    {name:'watch',price:13000,color:'gold'},
    {name:'tablet',price:3000,color:'white'},
    {name:'computer',price:53000,color:'gold'},
]

const highPriceProduct = shopping.find(product => product.color === 'gold');
console.log(highPriceProduct)
// { name: 'watch', price: 13000, color: 'gold' }


const productColor = shopping.find(product => product.color === 'black');
//undefined
