 /* 
 8 ways to get undefine
 1. variable that is not initialized will give undefined
 2. function with no return
 3. parameter that is not pass will be undefined
 4. if return has nothing on the right side will return undefined
 5. property that doesn't exists on an object will give you undefined
 6. accessing array elements outside of the index range
 7. deleting an element inside an array
 8. set a value directly to undefined
 */


//  1. variable that is not initialized will give undefined
 let first;
 console.log(first);
//  undefined

// 2. function with no return
function second(a,b){
    const total = a+b;
}

const result = second();
console.log(result);
// undefined


// 3. parameter that is not pass will be undefined
function third(a,b,c){
    const total = a+b+c;
    console.log(a,b,c)
}
third(2,5)
// 2 5 undefined


// 4. if return has nothing on the right side will return undefined
function noNegative(a,b){
    if(a<0 || b<0){
        return;
    }
    return a+b;
}
const total = noNegative(2,-5);
console.log(total);
// undefined


// 5. property that doesn't exists on an object will give you undefined
const fifth = {id:2,name: 'ponchom', age:50};
console.log(fifth.age, fifth.salary)
// 50 undefined

// 6. accessing array elements outside of the index range
const sixth = [4,5,6,9,5,2,3];
console.log(sixth[1],sixth[5],sixth[200])
// 5 2 undefined

// 7. deleting an element inside an array
const seven = [4,5,6,9,5,2,3];
delete seven[2]
console.log(seven[1],seven[2],seven[200])
// 5 undefined undefined

// 8. set a value directly to undefined
const eight = undefined;
console.log(eight)
// undefined


const nine = null;
console.log(nine);
// null
const ten = {name: null,age:25}
console.log(ten)
// { name: null, age: 25 }