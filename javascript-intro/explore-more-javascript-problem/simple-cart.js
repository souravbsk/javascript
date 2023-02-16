const shoppingCart = [

    {name:'shoe',price:1200,quantity: 4},
    {name:'shirt',price:2200,quantity: 5},
    {name:'pant',price:3700,quantity: 3},
    {name:'belt',price:600,quantity: 2},
    {name:'baslet',price:200,quantity: 2},
]


function totalCost (products){
    let total = 0;
for(let i=0; i<products.length;i++){
    const product = products[i];
    const productTotal = product.price * product.quantity;
    total += productTotal;
}
return(total);
}
const expanse = totalCost(shoppingCart);
console.log(expanse);