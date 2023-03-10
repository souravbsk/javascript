console.log(1);
console.log(2);

let num = 0;
const intervalId = setInterval(() => {
    console.log(num++);
   if(num === 10){
    clearInterval(intervalId)
   }
}, 1000);
const intervalId2 = setInterval(() => {
    console.log('hello world');
    clearInterval(intervalId2)

}, 1000);
console.log('4');
console.log('5');
console.log('6');

