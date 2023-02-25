// normal way parameter
function sum(firstNum,secondNum){
    const total = firstNum + secondNum;
    // console.log(total)
}
sum(10,20)
// 30

// default parameter old way 
function sumWithDefaultParameter(firstNum,secondNum){
    if(secondNum === undefined){
        secondNum = 10
    }
    const total = firstNum + secondNum;
    // console.log(total)
}
sumWithDefaultParameter(50)
// 60


// default parameter old shortcut way 
function sumWithDefaultParameterShortcut(firstNum,secondNum){
    secondNum = secondNum || 0;
    const total = firstNum + secondNum;
    // console.log(total)
}
sumWithDefaultParameterShortcut(50)
// 50





// default parameter es6 way 
function Es6DefaultParameter(firstNum = 10 ,secondNum = 20){
const total = firstNum + secondNum;
console.log(total)
}
Es6DefaultParameter()
// 30

Es6DefaultParameter(60)
// 80


// default parameter example
function fullName (firstName , lastName = 'chowdhori'){
    const name =  firstName + ' ' + lastName;
    console.log(name);
}
fullName('neymar')
// neymar chowdhori
fullName('neymar','jr')
// neymar jr