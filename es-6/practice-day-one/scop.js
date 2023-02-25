// local scope:  when we declare a variable inside curly brakat . 
// global scope: which variable we can access globally anywhere. link 
//block scope: which variable declare inside curly brakat;
// function scope: which variable we can declare inside function; 


let a = 5;
// let a = 8; wrong
a = 8;

function add(){
    // a = 10;
    let a = 15;
    console.log(a)
}
add()
console.log(a)



const name = 'neymar';
function add1(){
    const name = 'vini';
    console.log(name)
}
add1()