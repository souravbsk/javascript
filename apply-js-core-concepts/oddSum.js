function oddSum (numbers){
    let total = 0;
    for(let i = 0; i<numArray.length; i++){
        const numElement = numArray[i];
        if(numElement % 2 != 0){
            total += numElement;
        }
    }
    return total;

}
const numArray = [5,7,8,10,45,30]
const result = oddSum(numArray);
console.log(result);