const numbers = [2,24,36,28,16,29];
const third = numbers.map(x => x/3);
console.log(third)
/* 
[
  0.6666666666666666,
  8,
  12,
  9.333333333333334,
  5.333333333333333,
  9.666666666666666
]
*/

const firstMultipy = numbers.map(x => x*2);
console.log(firstMultipy)
// [ 4, 48, 72, 56, 32, 58 ]


const friends = ['akash','uchass','farhan','ananta','kosai','badhan'];
const firstLatter = friends.map(friend =>  friend[0]);
console.log(firstLatter)
// [ 'a', 'u', 'f', 'a', 'k', 'b' ]

const friendLength = friends.map(friend => friend.length);
console.log(friendLength)
// [ 5, 6, 6, 6, 5, 6 ]



const shopping =[
    {name:'phone',price:23000,color:'sliver'},
    {name:'watch',price:13000,color:'black'},
    {name:'tablet',price:3000,color:'white'},
    {name:'computer',price:53000,color:'gray'},
]

const productName = shopping.map(cart => cart.name);
console.log(productName)
// [ 'phone', 'watch', 'tablet', 'computer' ]

const productPrice = shopping.map(cart => {
    return cart.price <20000;
})
console.log(productPrice)

// [ false, true, true, false ]