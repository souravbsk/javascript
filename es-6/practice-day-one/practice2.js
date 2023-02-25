/* 
৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 
*/

/* 
৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা 
array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/

const numbers = [ 2,4,6,3,2,9,3,8,5];
const multiplyFive = numbers.map(number => number *5);
console.log(multiplyFive)
/* [
    10, 20, 30, 15, 10,
    45, 15, 40, 25
  ] */

  /* 
  ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
  */

  const oddNumbers = numbers.filter(number => number % 2 !==0);
  console.log(oddNumbers)
//   [ 3, 9, 3, 5 ]



/* 
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/

const products = [
    {name:'laptop',price:8000, color:'blue'},
    {name:'phone',price:5000, color:'black'},
    {name:'computer',price:50000, color:'gray'},
    {name:'tablet',price:5000, color:'pink'},
]

const specialProduct = products.find(product => product.price === 5000);
console.log(specialProduct)
// { name: 'phone', price: 5000, color: 'black' }

// summary 
// map: map take an array element one by one and finally run a operation on those element one by one. and all result return by array 
//forEach: forEach and map they all are same . but forEach does not return any output;
//filter: The filter takes array elements one by one and finally tests with a condition. And finally returns this value as an array that fully satisfies the condition
// find : find almost matched by filter but find alway return one element which is first full fill condition