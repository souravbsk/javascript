// arguments gives us array like object 
function sum(a, b, c) {
// _______________________________________________________
    console.log(arguments);
/* 
[Arguments] {'0': 2,'1': 5,'2': 3,'3': 6,'4': 4,'5': 7,'6': 8,'7': 9}
*/
 // _________________________________________________________
// access arguments with index number 
console.log(arguments[2])
// 3
console.log(arguments[5])
// 7
// ___________________________________________
// can't push pop 
// arguments.push(45)
// error
// _____________________________________
// type of arguments 
console.log(typeof arguments)
// object

    const total = a + b + c;
    return total;
}


const total = sum(2, 5, 3, 6, 4, 7, 8, 9);
// find function parameter length 
console.log(sum.length)
// 3
console.log(total)
// 10