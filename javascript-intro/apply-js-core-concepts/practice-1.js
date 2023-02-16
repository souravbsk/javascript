// hour to minutes convert 

function hourToMinute(hour){
    const convetMinute = hour * 60;
    return convetMinute;
}

const minute = hourToMinute(6);
console.log(minute);



// minute to seconds 
function minToseconds (minute){
    const seconds = minute * 60;
    return seconds;
}

const seconds = minToseconds(3)
console.log(seconds);


// hours to milliseconds
function hourToMilliseconds(hour){
    const convertMilisecond = hour * 3600000;
    return convertMilisecond;
}

const milliseconds = hourToMilliseconds(2)
console.log(milliseconds);