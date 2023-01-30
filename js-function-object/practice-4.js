// Has return + Has parameter 
function odd_even(num){
    if(num % 2 !=0){
        console.log(num, ' odd number');
    }
    else{
        console.log(num, 'even number');
    }
}
odd_even(5)


// No return + Has parameter 
function odd_evenGenerate(num){
    if(num % 2 != 0){
        return (num + ' '+ 'odd number');
    }
    else{
        return (num + ' '+  'even number');
    }
}
var result = odd_evenGenerate(10);
console.log(result);

