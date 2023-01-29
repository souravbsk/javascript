/* 
তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 

5>6 (5 greater then 6)
5<6 (5 less then 6)
5==6 (5 and 6 ara equal)
5!=6 (5 and 6 ara  not equal)
5>=6 (5 greater then 6 and equal)
5<=6 (5 less then 6 and equal)
5===6 (5 and 6 equal and also same type)
5!==6 (5 and 6 not equal and also not same type)
&& and (all condition must be true)
|| and (it's ok to specific one condition is true)


২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, 
৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে, ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। 
না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।  */


var money = 90000;
var mac = 80000;
var gamingLaptop= 60000;
var lenovoYoga = 40000;
var secondHandLaptop = 20000;

if(money>mac){
    console.log('buy a macbook');
}
else if(money>gamingLaptop){
    console.log('buy a gaming laptop');
}
else if(money > lenovoYoga){
    console.log('buy a lenovo Yoga');
}
else if(money > secondHandLaptop){
    console.log('second Hand Loaptop kinbo');
}
else{
    console.log('mobile is more then of');
}