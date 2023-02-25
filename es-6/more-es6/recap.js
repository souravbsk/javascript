// variable let const  (block scoped ) 
// const reassign not allow  but we can modify 
const numbers = [25,45,69,85];

//let reassign allow 
let starPlayer = 'ronaldo';
starPlayer = 'neymar';
console.log(starPlayer)


// function  default parameter
function calculateSalary(salary,tax = 0.25,bonus = 0){
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// 3/ template string 
const elementHtml = `
<div>
    <h3>Name: neymar</h3>
    <p>address: brazil</p>
    <p>salary: ${calculateSalary(10000,0,0)}</p>
    <p>other: ${numbers[2]}</p>
</div>
`

// 4. Arrow function 
// single line 
const doubleIe = x => x*2;
// multiline 
const calculateSalary2 =(salary,tax,bonus) => {
  return   salary - salary*tax+bonus;
}

// 5// spread 
const ages = [11,15,14,10,16];
const newArray = [...ages,26,86,63];



//5 destructuring 
// (must be apply property )
const {x,y,...z} = {x:45,y:25,z:85,name: 'sakib al hasan'};
const [a,...b] = [12,45,63,95];


// 6 types of function 
// function deceleration 
function adding(num,num2){
    console.log(num,num2)
}

//function expression 
const add2 = function add2(num,num2){
    console.log(num,num2)
}

//function expression with anonymous
const add3 = function (num,num2){
    console.log(num,num2)
}