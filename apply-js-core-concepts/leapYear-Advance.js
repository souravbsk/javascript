function leapYearVerify (year){
    if(year % 4 ==0 && year % 100 !=0 || year % 400 ==0){
        return true
    }
    return false
}

const isLeapYear = leapYearVerify(2100);
console.log(isLeapYear);