
/* 
১. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
*/
// const userValue = prompt('enter a valid number');
// const convertNumberValue = parseFloat(userValue);
// const addition = convertNumberValue + 200;
// alert(addition)


/* 
২. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
*/

const userBooleanValue = confirm("do you wan't to see your location")
if(userBooleanValue){
    console.log(location.href);
}


/* 

. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 
*/

/* cookies is a  part of browser api . which is use for some data store on our browser as text file
cookies use booth side client side and server side also.
*/