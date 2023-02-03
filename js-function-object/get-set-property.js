var shoppingCart ={
    phone : 5,
    laptop: 15,
    mouse:20,
    keyboard:30,
    router:2
}
// console.log(shoppingCart);
// { phone: 5, laptop: 15, mouse: 20, keyboard: 30, router: 2 }


// get value ____________________
// get a specific value with dot notation 
console.log(shoppingCart.phone);
// 5

// get a specific value with array 
var phoneItem = shoppingCart['phone'];
console.log(phoneItem);
// 5

// with variable 
var propertyName = 'mouse';
console.log(shoppingCart[propertyName]);
// 20




// set object value ___________________________

// set a specific value with dot notation 
shoppingCart.phone = 12;
console.log(shoppingCart);
// { phone: 12, laptop: 15, mouse: 20, keyboard: 30, router: 2 }

//set a specific value with array notation 
shoppingCart['keyboard'] = 10;
console.log(shoppingCart);
// { phone: 12, laptop: 15, mouse: 20, keyboard: 10, router: 2 }

// set a value with variable
var routerItem = 'router';
shoppingCart[routerItem] = 15;
console.log(shoppingCart); 
// { phone: 12, laptop: 15, mouse: 20, keyboard: 10, router: 15 }




// get object all keys 
var objectKeys = Object.keys(shoppingCart);
// console.log(objectKeys);
// [ 'phone', 'laptop', 'mouse', 'keyboard', 'router' ]

// get object all values
var objectValue = Object.values(shoppingCart);
// console.log(objectValue); 
// [ 5, 15, 20, 30, 2 ]


console.log(shoppingCart.slie);
// undefined

// set a new item in object 
shoppingCart['mega'] = 20;
console.log(shoppingCart);
/* 
{
    phone: 12,
    laptop: 15,
    mouse: 20,
    keyboard: 10,
    router: 15,
    mega: 20
  } 
  */