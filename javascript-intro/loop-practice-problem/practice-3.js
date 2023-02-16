// উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 
var firstTask = 'রাত ১০ টা বাজে মডিউল আনলক করো';
var secondTask = 'ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো';
var thirdTask = ' ভিডিও দেখতে দেখতে নোটস নাও';
var fourTask = 'মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো';
var fiveTask = 'কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো';
var task = [firstTask,secondTask,thirdTask,fourTask,fiveTask];

var x = 10;
while(x >= 1){
    console.log(x + ' ' + task);
    x--
}
