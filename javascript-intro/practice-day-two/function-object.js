// 1
/* 
what is function?
and: function is a block of code. a set of statements (block of code). that perform a task when it is called
    maintains a relationship with input and output;it's stor to repeating code on out js file. 

syntax:
        function fName (parameter){
            code of block 
            return result
        }

        // call it 
        fName(value)
        \


// 2
function parameter why use
ans: when we write a code into a function body . and we need a value . then we can use parameter to supply a value into function body.

// 3 
why use return 
and: when we write a code into a function body. and we need get the specific result outside the function . then we can use return keyword to 
     get the specific value  outside of function


//  4
if we can't write anything after return;
ans: 
If we don't write anything after return we will exit the function with no value or result;


// 5
what can i write after return;
we can write anything (string,numeric,boolean,array, object, even a function also ) which on we need. 


// 6 
// function declaration and function expression different 
ans: their are on key different between function expression and function declarations is that function expression
can be anonymous, while function declaration must have a name
2/ we can call function declaration any where. and we can get output. but we can't call function expression before declare . for hoisting issue ;
3/ their syntax almost some but one different available .. function expression store in to declare a variable.but they have no name . but function 
        declaration must have a name but they no need to store in variable.



arrow function vs regular function 
arrow function and regular function different between 
1. syntax . regular function : function name(){}; arrow function: const variablename = () => {}
2/ we can declare regular function with function keyword . but we can declare arrow function with (=>) arrow symbol
3/ regular function need a name but arrow function no need name
4/ regular function no need to store it a variable.but arrow function need varibale store it 
5/ function expression update version is arrow function




// function vs loop 
function is block of code . after we declare a function . we can call it any time As often as we need  run function code.
but loop basically performed by a condition . when we run a loop . after fulfil the condition loop can stop 




// object and array different 
when we need to store a multiple value in on variable .then we can use array. we can write multiple value into third bracket 
        and separate between multiple values with coma;  
        array = ['neymar','ronaldinho','ronaldo']

javascript objects are containers for named values called properties. we can store data like key value ;
        object = {
            key : value;
        }

*/ 


const shoppingCart = {
    mobile : 2000,
    laptop : 500,
    computer: 600
}

console.log(shoppingCart.mobile);
const laptopKey = shoppingCart['laptop'];
console.log(laptopKey);


const computerKey = 'computer';
console.log(shoppingCart[computerKey]);


const objectKey = Object.keys(shoppingCart);
console.log(objectKey);

const objectValues = Object.values(shoppingCart);
console.log(objectValues);