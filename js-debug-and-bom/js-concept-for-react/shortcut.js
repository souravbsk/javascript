// truthy
// true,{},[],without 0 any positive and negative,'alien';

// falsy
//false ,'',0,null,undefined,


// truthy checker 
const trueVlaue = -1;
if(trueVlaue){
    // console.log('true');
}
else{
    // console.log('false');
}

// falsy and negative value checker 

const falseValue = 0;
if(!falseValue){
    console.log('false');
}
else{
    console.log('true');
}

// turnery operator  
const money = 80;
let food;
if(money > 100){
    food = 'biriyani'
}
else{
    food = 'cha biscuit khabo'
}


let food1 = money>100 ? 'biriyani khabo' : 'cha biscuit khabo';
console.log(food1);
// cha biscuit khabo
const myVar = 20;
// multi condition 
let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);
// filter water



// convert number to string 
const num1 =52;
const num1Str = num1 + '';
console.log(num1Str);
// 52

//convert string to number
const num2 = '52';
const num2Number = +num2;
console.log(num2Number);
// 52




let isActive = true;

const showData = () => console.log('show data');
const hideData = () => console.log('hide data');

// isActive ? showData(): hideData();
// use && if the left side is true then right side will be executed
isActive && showData();
// use || if the left side is false then right side will be executed 
isActive || hideData()


// toggle for boolean
isActive = !isActive