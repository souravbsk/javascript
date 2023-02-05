/* 
 সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 
*/
function feetToInch(feet){
    return feet*12;
}
const inch = feetToInch(2);
console.log(inch)


// problem 2
function centimeterToMeter (centimeter){
    return centimeter / 100;
}
const totalMeter = centimeterToMeter(3);
console.log(totalMeter)


// problem 3
function paperRequirements (firstBookQty,secondBookQty,thirdBookQty){
    const firstBookPagePrint = 100;
    const secondBookPagePrint = 200;
    const thirdBookPagePrint = 300;

    const firstBookPage = firstBookPagePrint * firstBookQty;
    const secondBookPage = secondBookPagePrint * secondBookQty;
    const thirdBookPage = thirdBookPagePrint * thirdBookQty;
    return totalPage = firstBookPage + secondBookPage + thirdBookPage;
}

const totolBookPages = paperRequirements(2,5,3)
console.log(totolBookPages)



// problem 4
function bestFriend(friends){
    let largeFriend = friends[0];
    for(const friend of friends){
        if (friend.length>largeFriend.length){
            largeFriend = friend
        }
    }
    return largeFriend

}

const frined =['neymar','vini','antony','ronaldinho','ronaldo','alison'];
const biggestName = bestFriend(frined);
console.log(biggestName)



// problem5
function positiveNumber(numbers){
    const newPositiveArray = [];
for(const number of numbers){
    if(number>=0){
        newPositiveArray.push(number)

    }
    else if(number<0){
        break
    }

}
return newPositiveArray;


}

const numbers = [2,8,0,-9,6,7,4,-6,2,-9,10,15];
const positveValue = positiveNumber(numbers);
console.log(positveValue);