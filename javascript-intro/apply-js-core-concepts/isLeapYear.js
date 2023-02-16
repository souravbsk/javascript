function isLeapYear (year){
    const reminder = year % 4;
    if(reminder == 0){
        return true;
    }
    return false;
}


const leapYear = isLeapYear(2100);
console.log(leapYear);