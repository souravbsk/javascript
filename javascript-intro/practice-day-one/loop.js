// আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
var viralDialog = 'আসকে  আমার মন ভালো নেই';
for(let i = 0; i<40; i++){
    // console.log(viralDialog);
}

// how does work while loop and for loop 
// when we run a code. and we need to run a code again and agin then we can use loop. 3 type loop in javascript such us while , for, do-while

// while loop and for loop difference ____
// there are no difference in while and for loop . they work same way. but their syntax different 

//৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
// if we can't change variable in while. the run to infinitive way . and your device must be hanged 


// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 

for (let i = 58; i <= 98; i++) {
    // console.log(i);
    
}

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও 
for (let i = 412; i<465; i+=2){
// console.log(i);
}



// একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

var x = 581;
while(x<623){
    // console.log(x);
    x+=2
}


/* 
৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
*/
var skills = ['html','css','bootstrap','tailwind','javascript','react']
for(let i = 0; i<skills.length; i++){
    // console.log(skills[i]);
}

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
var phones = ['samsung','nokia','redmi','xaomi','vivo']
var x = 0;
while(x<phones.length){
    // console.log(phones[x]);
    x++
}

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
for(let i = 30; i<86;i++){
    // console.log(i);

    if(i == 44){
        break
    }

}

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
var bookPrice = [ 100,150,201,250,480,236,45,65,25,206,96];
for (let i =0; i<bookPrice.length; i++){
    var singlePrice = bookPrice[i];

    if(singlePrice>200){
        continue
    }
    // console.log(singlePrice);

}

const online = ['online'];
function findOnline(array){
    for(let i = 0; i<array.length; i++){
        const arrayItem  = array[i];
        console.log(i);
        if(arrayItem === 'online'){
            console.log(arrayItem);
        }
    }
    
}

findOnline(online)