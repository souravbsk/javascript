// 1) If I write []==true,will it show true or false? Check it out.

console.log([] == true)
// false

// 2) Use === to check if the true === "true" gives true or false.

const x = 'true';
const y = true;
if (x === y) {
    console.log(true)
}
else {
    console.log(false)
}
// false


/* 
3) Write an arrow function that will take a parameter and will check if the
parameter is a number or not by using isNaN(). And return true or false.
*/

const isNumber = (num) => {
    if (isNaN(num)) {
        return false;
    }
    else {
        return true;
    }
}
const numberChecker = isNumber('2');
console.log(numberChecker)