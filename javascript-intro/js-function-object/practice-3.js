function make_avg(numArray){
    var totalSum=0;
    for(var i = 0; i<numArray.length;i++){
       var singleElement = numArray[i];
       totalSum = totalSum + singleElement;
    }
    var average = totalSum / numArray.length;
    return average;
}

var number = [20,45,69,85,76];
var result = make_avg(number);
console.log(result);
// 59



// var smartphone = { brand: "iPhone", model: "13" };
// console.log(smartphone[brand]);