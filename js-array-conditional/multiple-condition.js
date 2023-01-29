var isGraduated = true;
var salary = 5000;
var car = 0;

// && must be all condition are fulfil
if (isGraduated == true && salary >= 35000 && car >= 1) {
    console.log('lets enjoy your self');
}
else{
    console.log('you can not fulfill your condition');
}
// you can not fulfill your condition



// || If either condition is true 

if(isGraduated == true || salary >= 35000 || car >= 1){
    console.log('do something ');
}
else{
    console.log('hello world');
}