console.log(1);
console.log(2);
setTimeout(lazyFunction,3000);
console.log(4);
console.log(5);
console.log(6);

function lazyFunction(){
    console.log(3);
}