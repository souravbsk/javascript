//একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। 

var firstTask = 'রাত ১০ টা বাজে মডিউল আনলক করো';
var secondTask = 'ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো';
var thirdTask = ' ভিডিও দেখতে দেখতে নোটস নাও';
var fourTask = 'মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো';
var fiveTask = 'কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো';
var task = [firstTask,secondTask,thirdTask,fourTask,fiveTask];

// for loop 
for(var i = 1; i<=10;i++){
    console.log(i + ' ' + task);

}

