function EvenChecker(value){
    if(value % 2 !== 0){
        return false
    }
    else{
        return true;
    }
}
const result = EvenChecker(6);
console.log(result);