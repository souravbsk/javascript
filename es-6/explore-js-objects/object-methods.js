const bottle = {
    color:'yellow',
    price:50,
    isCleaned: true,
    capacity:1
}
// Object.key (The key method gives us the names of all the properties in an array)
const propertyName = Object.keys(bottle);
console.log(propertyName);
// [ 'color', 'price', 'isCleaned', 'capacity' ]


//Object.value (the value method gives us the value of all the properties in an array)
const propertyValue = Object.values(bottle);
console.log(propertyValue);
// [ 'yellow', 50, true, 1 ]




//Object.entries (the entries method gives us the name and value of all the properties in an two dimentional array)
const objPropertys = Object.entries(bottle);
console.log(objPropertys)
/* 
[
  [ 'color', 'yellow' ],
  [ 'price', 50 ],
  [ 'isCleaned', true ],
  [ 'capacity', 1 ]
]
*/


// delete (we can delete a specific object property using delete method)
console.log(bottle)
// { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
delete bottle.isCleaned;
console.log(bottle)
// { color: 'yellow', price: 50, capacity: 1 }



const bottle1 = {
    color:'yellow',
    price:50,
    isCleaned: true,
    capacity:1
}

/*  seal (using seal method we can't delete any obj property
    and also we can't add a new property but we can modify obj property value)
  */
console.log(bottle1)
// { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
Object.seal(bottle1);
delete bottle1.isCleaned;
bottle1.price = 100;
bottle1.company = 'water';
console.log(bottle1)
// { color: 'yellow', price: 100, isCleaned: true, capacity: 1 }




const bottle2 = {
    color:'yellow',
    price:50,
    isCleaned: true,
    capacity:1
}

// freeze (using freeze . we can't modify, add, delete object property)
console.log(bottle2);
// { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
Object.freeze(bottle2)
delete bottle2.isCleaned;
bottle2.price = 100;
bottle2.company = 'water';
console.log(bottle2)
// { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
