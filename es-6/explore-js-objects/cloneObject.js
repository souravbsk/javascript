const bottle = {
    color:'yellow',
    price:50,
    isCleaned: true,
    capacity:1
};


// way to clone object 


// 1 under the hood
const bottle2 = bottle;
bottle2.isCleaned = false;
console.log(bottle);
// { color: 'yellow', price: 50, isCleaned: false, capacity: 1 }
console.log(bottle2);
// { color: 'yellow', price: 50, isCleaned: false, capacity: 1 }


//shallow copy with spread operator 
const shallowBottle = {...bottle};
shallowBottle.color = 'red';
console.log(bottle)
// { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
console.log(shallowBottle);
// { color: 'red', price: 50, isCleaned: true, capacity: 1 }




//3. deep copy use json parsing
const objCopy = JSON.parse(JSON.stringify(bottle));
objCopy.price = 200;
console.log(bottle)
// { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
console.log(objCopy)
// { color: 'yellow', price: 200, isCleaned: true, capacity: 1 }