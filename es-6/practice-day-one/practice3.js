/* 
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
*/
const player = {
    name: 'neymar',
    age: 29,
    profession : 'footballer'
}
const {name,age,profession} = player;

/* 
৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three'
 নামক একটা ভেরিয়েবল এ রাখবে। 
*/
const numbers = [ 2,4,6,3,2,9,3,8,5];
const [one,two,three] = numbers;
console.log(three)
// 6


/* 
১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে।
 আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
*/

const defaultPera = (x,y,z=7) => x+y+z;
console.log(defaultPera(2,3))
// 12

 