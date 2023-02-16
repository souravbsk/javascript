// problem -1
function radianToDegree(radian){
    const pi = 3.14159265359;
    const convertDegree = radian * (180/pi);
    return convertDegree;
}
const degree = radianToDegree(2).toFixed(3);
console.log(degree)


// problem 2
function isJavaScriptFile(text){
    return text.endsWith('.js');
}
const isJsScript = isJavaScriptFile('app.js');
console.log(isJsScript)

// oilPrice
// problem3
function oilPrice(diesel,petrol,octan){
    const perLtrDiesel = 114;
    const perLtrPetrol = 130;
    const perLtrOctan = 135;

    const totalDieselCost = perLtrDiesel * diesel;
    const totalPetrolCost = perLtrPetrol * petrol;
    const totalOctanCost = perLtrOctan * octan;
    const totalCost = totalDieselCost + totalPetrolCost + totalOctanCost;
    return totalCost;
}
const totalOilPrice = oilPrice(2,4,3);
console.log(totalOilPrice) 


// problem 4
// publicBusFare
function publicBusFare(person){
    const busCap = 50;
    const microBupCap = 11;
    let remain = 0;
    if(person>50){
        const busCapRemain =  person % busCap;
        const totalRemain = busCapRemain % microBupCap;
        remain = totalRemain;

    }
    console.log(remain*250)
    
}

publicBusFare(55)



// problem 7 


function isBestFriend(friendObj1,friendObj2){

   return (friendObj1.name === friendObj2.friend && friendObj1.friend === friendObj2.name );
}

const objOne = { name: "abul", friend: "babul" };
const objTwo = { name: "babul", friend: "abul" };
const result = isBestFriend(objOne,objTwo)
console.log(result)