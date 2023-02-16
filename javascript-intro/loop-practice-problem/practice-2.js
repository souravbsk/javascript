/* 
প্রাকটিস চ্যালেঞ্জ-২: 

আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো। 
*/

var firstTask = 'রাত ১০ টা বাজে মডিউল আনলক করো';
var secondTask = 'ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো';
var thirdTask = ' ভিডিও দেখতে দেখতে নোটস নাও';
var fourTask = 'মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো';
var fiveTask = 'কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো';

// while loop 
var task = [firstTask,secondTask,thirdTask,fourTask,fiveTask];
var x = 1;
while(x<=10){
    console.log(x + ' ' + task);
    x++
}