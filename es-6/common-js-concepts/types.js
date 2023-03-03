// others programming language always define which data type it is
/* string name = 'alien';
Number age =23;
Boolean isGood = true
 */


// no need to define data type name . when declare a variable 
// but js can understand which data type it is 


//1 that's javascript is dynamic language 
/* const name = 'alien';
const age = 23;
const isDeveloper = true;
const friends = ['uchass','farhan','ananta'] */

console.log(typeof name, typeof age, typeof isDeveloper, typeof friends)
// string number boolean object


// data type 
// premitive data type and non premitive data type 

// premitive data type : 
//1. String
//2. numeric
//3. boolean
//4. undefine
//5. null



// non-premitive data type 
// 1. array 
// 2. object





let a = 2;
let b = a;
console.log(a,b);
// 2 2

b = 5
console.log(a,b)
// 2 5





let x = {job:'web developer'}
let y = x;
console.log(x,y)
// { job: 'web developer' } { job: 'web developer' }
// y = {job: 'backend developer'};

console.log(x,y);
// { job: 'web developer' } { job: 'backend developer' }


y.job = 'front end web developer';
console.log(x,y)
// { job: 'front end web developer' } { job: 'front end web developer' }