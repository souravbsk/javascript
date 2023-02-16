const numbers = [2,5,6,9,5,2,63,5];
/* for(let i =0 ; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number)
} */


// shortcut loop for of 

for(const number of numbers){
    console.log(number)
}


const products = [

    {id:1, name: 'android phone', price: 2000},
    {id:2, name: 'I phone', price: 2000},
    {id:3, name: 'xaomi', price: 2000},
    {id:4, name: 'redmi Phone', price: 2000},
    {id:5, name: 'nokia phone', price: 2000},
    {id:6, name: 'vivo Phone', price: 2000},
    {id:7, name: 'lenevo Phone', price: 2000},
]


function prodcutSearch(products, search){
    let matched = []
    for(const product of products){
        
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}
const matchProduct = prodcutSearch(products,'phone');
console.log(matchProduct)