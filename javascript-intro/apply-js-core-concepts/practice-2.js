// find leap year 

function findLeapYear(year){
    let leapYear = [];
    for(let i = 0; i< year.length; i++){
        const yearElement = year[i];
        if(yearElement % 4 ==0 && yearElement % 100 !=0 || yearElement % 400 ==0){
            leapYear.push(yearElement);
        }
    }
    return leapYear;

}

const yearArray = [2023,2024,2025,2028,2030];
const leapYear = findLeapYear(yearArray);
console.log(leapYear);