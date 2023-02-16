const fruit = ['orange','apple','banana','mango','stovery'];

// const new1 = fruit.copyWithin(1,3);
// console.log(new1)
// [ 'orange', 'mango', 'stovery', 'mango', 'stovery' ]

const new2 = fruit.copyWithin(1,3)
console.log(new2)





// fill 
/* 
fill(value)
fill(value, start)
fill(value, start, end)
*/


const names = ['neymar','silva','alison','rapinha'];
console.log(names.fill('antony'))
// [ 'antony', 'antony', 'antony', 'antony' ]
console.log(names.fill('vini',1))
// [ 'antony', 'vini', 'vini', 'vini' ]

console.log(names.fill('casimiro',1,2))
// [ 'antony', 'casimiro', 'vini', 'vini' ]

console.log(names)
// [ 'antony', 'casimiro', 'vini', 'vini' ]