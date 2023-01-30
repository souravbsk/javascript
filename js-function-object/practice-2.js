function make_avg(num1,num2,num3){
    var total = num1 + num2 + num3;
    var average = total / 3;
    return average;
}

var result = make_avg(60,60,60);
console.log(result);