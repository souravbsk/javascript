
/* 
    always use  === 
    equal comparison doesn't work for non-primitive 
*/
const x = 2;
const y = '2';
if(x===y){
    console.log('true');
}
else{
    console.log('false')
}
//==: true
//===: false

const first = '0';
const second = false;
console.log(first === second);

/* 
== : true
===: false
*/

/* 
double equal behind the scene
type coercion
type conversion
type casting
*/



const m = 1;
const n = true;
if(m==n){
    console.log('true');
}
else{
    console.log('false')
}

// == : true;
// ===: false;



const a = [2,5];
const b = [2,5];
console.log(a==b)
// == : false
// === : false