// find leap year

function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return 'leapyear'
    }
    else {
        return year
    }
}


function HourToMunite(hours) {
    return hours * 60;
}


// preoblem2
// leapYear

function findLeapYear(years) {

    for (const year of years) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return year
        }
    }
}
const yearArray = [2023, 2024, 2025, 2028, 2030];
const leapYearResult = findLeapYear(yearArray)
console.log(leapYearResult)


// oddSum
function findOddSum(numbers) {

    let sum = 0;
    for (const num of numbers) {
        if (num % 2 !== 0) {
            sum += num
        }
    }
    return sum;

}
const number = [5, 7, 8, 10, 45, 30,40];
const sumOutput = findOddSum(number)
console.log(sumOutput)



// second largest number 
function secondLarge(num) {

    let largeNumber = num[0];
    let secondNum;

    for(const number of num){
        if(number>largeNumber){
            secondNum = largeNumber;
            largeNumber = number;
        }
        else if(number>secondNum){
            secondNum = number
        }

    }
    console.log(secondNum)
}

const secondLargeNum = secondLarge(number);
console.log(secondLargeNum)


