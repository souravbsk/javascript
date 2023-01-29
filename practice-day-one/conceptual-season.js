var name = 'neymar';
console.log(typeof name);

var age = 29;

var players = ['neymar','vini jr','antony','ronaldinho']

console.log(typeof players);
var player ={

}

var num1 = 10;
var num2 = '20';

console.log(parseInt(num2));
console.log(num1/num2);



// problem 1
var grade = 55;

if(grade > 100){
    console.log('vai apni kivabe 100 ar besi number pailen');
}
else if(grade<=100 && grade>=0){
    if(grade >= 80){
        console.log('A');
    }
    else if(grade>=70){
        console.log('B');
    }
    else if(grade >= 45){
        console.log("C");
    }
    else if(grade >= 33){
        console.log("D");
    }
    else{
    console.log('F');

    }
}
else{
    console.log('0 theke kom kemne pan');
}

// problem 2

var number = 20;
if(number % 2 !=0){
    console.log('odd number');
}
else{
    console.log('even number');
}


// problem 3
// var numbers = [1,5,4,6,8,2,8,9,6,3,9,12,16,20,14];
// console.log(numbers.sort());


// problem 4


// problem 5
for(let i = 0; i<=50; i++){
    if(i % 3 == 0){
        console.log(i + ' ' + 'divide by 3');
    }
    else if(i%5 == 0){
        console.log(i + ' ' + 'divide by 5');
    }
}



// problem 6
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var longestName = '';
for(let i =0; i<friends.length; i++){
    var element = friends[i];
    if(element.length > longestName.length ){
        longestName = element
    }
}
console.log(longestName);


// problem 7
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var newArray = [];
var duplicatChecker;
for(let i =0 ; i<numbers.length; i++){
    var number = numbers[i]
    if(number != duplicatChecker){
        duplicatChecker = number
        newArray.push(duplicatChecker)
    }
}
// console.log(newArray);


// problem 8
var numbers1 = [1, 20, 3, 3, 4, 4, 5, 6, 700, 8, 9, 10];
var largestNumber = '';
for(let i = 0; i<numbers1.length; i++){
    var number = numbers1[i];
    if(number>largestNumber){
        largestNumber = number
    }

   
}
console.log(largestNumber);