// maximum name 



function largestName (nameArray){
    let largeName = nameArray[0];
    for(let i = 0; i<nameArray.length; i++){
        const nameElement = nameArray[i];
        if(nameElement.length > largeName.length){
            largeName = nameElement;
        }
    }
    return largeName;
}

const friendName = ['uchass','akash','koushik','ananta','farhan','ronaldo nagiro']
const largeName = largestName(friendName);
console.log(largeName);