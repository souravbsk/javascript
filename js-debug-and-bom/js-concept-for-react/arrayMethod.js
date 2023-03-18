const products = [
    {name:'laptop',price:2000,color:'black'},
    {name:'phone',price:1500,color:'gray'},
    {name:'Iphone',price:5000,color:'gold'},
    {name:'tablet',price:2300,color:'white'},
    {name:'watch',price:6000,color:'blue'},
];

// map 

const productsNames = products.map(product => product.name);
console.log(productsNames);
// [ 'laptop', 'phone', 'Iphone', 'tablet', 'watch' ]

// forEach 
products.forEach(product => console.log(product.price))

/* 
2000
1500
5000
2300
6000
*/



// filter
const cheap = products.filter(product => product.price < 3000);
console.log(cheap);
/* 
[
  { name: 'laptop', price: 2000, color: 'black' },
  { name: 'phone', price: 1500, color: 'gray' },
  { name: 'tablet', price: 2300, color: 'white' }
]
*/

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

/* 
[
  { name: 'phone', price: 1500, color: 'gray' },
  { name: 'Iphone', price: 5000, color: 'gold' }
]
*/


// find 

const special = products.find(product => product.name.includes('n'));
console.log(special);
// { name: 'phone', price: 1500, color: 'gray' }