/*  
function scope  : function এর ভিতর কোনো  ভ্যারিয়েবল লেখা হলে সেটাকে function scope বলা হয়। 
function scope আমরা শুধু ফাংশনের ভিতর থেকে এক্সেস করতে পারি। বাইরে থেকে এক্সেস করতে চাইলে error 
দিবে/
*/

function one(a, b) {
    const total = a + b;
    console.log(total)
    // 3
}
one(1, 2)
// console.log(total)
// error 



/* block scope : second ব্র্যাকেট এর ভিতর কোনো ভ্যারিয়েবল ডিক্লেয়ার করলে তার block scope বলা। 
এই ভ্যারিয়েবল গুলো কে আমরা শুধ ওই সেকেন্ড ব্র্যাকেট এর ভিতর থেকে এক্সেস করতে পারবো। বাইরে থেকে
এক্সেস করতে চাইলে error দিবে। (let and const কে ব্লক স্কোপ বলা হয়। )
 */

for (let i = 0; i < 5; i++) {
    console.log(i)
    /* 
    0
    1
    2
    3
    4
    */
}

// console.log(i);
// error 

let x = 2;
if(x){
    const a = 12;
    console.log(a)
    // 12
}
// console.log(a)
// error 



/* global scope: global scope আমরা যেকোনো জায়গা থেকে এক্সেস করতে পারি। এটি সেকেন্ড ব্যাকেট 
এর ভিতর ডিক্লেয়ার করলেও এটিকে বাইরে থেকে একেস করা যায়। 
javascript এ var কে global variable বলা হয়। 
 */

for(var i = 0; i<5; i++){
    console.log(i)
//     0
// 1
// 2
// 3
// 4
}

console.log('outside',i)
// outside 5


let name = 'alien';
if(name){
    var age = 25;
    console.log(age)
    // 25
}
console.log(age)
// 25

function fNmae(){
    var fullName = 'sourav basak';
    console.log(fullName);
    // sourav basak
}
fNmae()
// console.log(fullName)