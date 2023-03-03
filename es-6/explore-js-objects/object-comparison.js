// const a = {a : 2};
// const b = {a:2};
// if(a === b){
//     console.log('same');
// }
// else{
//     console.log('not same');
// }
// not same


// const firsNumber = {a:2,b:3,c:5};
const firsNumber = {a:2,c:5,b:3};
const secondNumber = {a:2,b:3,c:5};
const fNum = JSON.stringify(firsNumber);
const sNum = JSON.stringify(secondNumber);
if(fNum === sNum){
    console.log('same');
}
else{
    console.log('not same');
}
// same

// not same





// final way 
const firsNumber1 = {a:2,c:5,b:3};
const secondNumber2 = {a:2,b:3,c:5};
function objComparison(firstNum,secondNumber){
    const firstNumKeys = Object.keys(firstNum);
    const secondNumKeys = Object.keys(secondNumber);
    if(firstNumKeys.length === secondNumKeys.length){
       for(const key of firstNumKeys){
        if(firstNum[key] !== secondNumber[key]){
            return false;
        }
       }
       return true;
    }
    else{
        return false
    }
}
const coparisonResult = objComparison(firsNumber1,secondNumber2);
console.log(coparisonResult)
// true