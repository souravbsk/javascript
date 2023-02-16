// for loop 
// increases 
/*
 let sum = 0;
for(let i = 0; i<=5; i++){
    sum = sum  + i;
}
console.log(sum)
// 15 
*/

// descries 
/* 
let sum = 0;
for(let i = 5; i>=0; i--){
    sum = sum + i;
}
console.log(sum)
// 15
 */


// let's apply function like for loop 
// increases
function sum(i){
    console.log(i)
    if(i === 1){
        return 1
    }
    return  i + sum(i-1)
}
const result = sum(5);
console.log(result)


/* 
 return  i + sum(i-1) (explain)

return 5 + sum(4)
return 5 + 4 + sum(3)
return 5 + 4 + 3 + sum(2)
return 5 + 4 + 3 + 2 + sum(1) 
return 5 + 4 + 3 + 2 + 1;

*/