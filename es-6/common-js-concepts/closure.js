/* 
যখন একটি ফাংশনের ভিতরে আরেকটি ফাংশন রিটার্ন করি। তখন সেটি একটি closure/ encapsulation বানায়। যার জন্য প্রত্যেকের
যার জন্য প্রত্যেকের মান প্রত্যেকের কাছে থাকে। প্রথম বার কল দিলে যেই ভ্যালু পাবো দ্বিতীয় বার নতুন ভাবে কল দিলে নতুন করে ভ্যালু 
পাবো । প্রথম টার সাথে মিল থাকবে না
*/
const stopWatch = () => {
    let count = 0;
    return () => {
        count++
        return count
    } 
}
const watch1 = stopWatch();
const watch2 = stopWatch(); 
console.log(watch1())
// 1
console.log(watch1())
// 2
console.log(watch1())
// 3
// _____________________________________
console.log(watch2())
// 1
console.log(watch2())
// 2
console.log(watch2())
// 3
// _______________________________________
console.log(watch1())
// 4
console.log(watch2())
// 4
console.log(watch2())
// 5
console.log(watch2())
// 6
console.log(watch1())
// 5


