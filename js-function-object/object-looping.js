

var shoppingCart ={
    phone : 5,
    laptop: 15,
    mouse:20,
    keyboard:30,
    router:2
}

var shoppinKeys = Object.keys(shoppingCart);
// console.log(shoppinValue);
// [ 'phone', 'laptop', 'mouse', 'keyboard', 'router' ]

// hard way to looping 
for(var i =0; i<shoppinKeys.length; i++){
   var shoppingElement = shoppinKeys[i];
  var shoopingValues = shoppingCart[shoppingElement];  

    // console.log(shoppingElement, shoopingValues);
}


// Easy way to using for in 
for(var item  in shoppingCart){
    console.log(item , shoppingCart[item]);
}