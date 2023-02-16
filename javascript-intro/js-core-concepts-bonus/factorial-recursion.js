// factorial with for loop

let multiply = 1;
for (let i = 1; i <= 5; i++) {
    multiply = multiply * i;
}
console.log(multiply)




// find factorial with recursion way


function multiply1(i) {
    if (i === 1) {
        return 1;
    }
    return i * multiply1(i-1)
}
const result = multiply1(5);
console.log(result)


/* 
    return i * multiply1(i-1) (explain)

    5!= 
    return 5 *  multiply1(4-1)
    return 5 * 4 * multiply1(4-1)
    return 5 * 4 * 3 *multiply1(3-1)
    return 5 * 4 * 3 * 2 * multiply1(2-1)
    return 5 * 4 * 3 * 2 * 1  (condition ful fill )


*/