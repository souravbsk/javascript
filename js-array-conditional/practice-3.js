/* 
You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
*/
var firstNumber = 53;
var secondNumber = 29;
var thirdNumber = 145;

if(firstNumber >secondNumber && firstNumber> thirdNumber){
    console.log(firstNumber);
}
else if(secondNumber > firstNumber && secondNumber > thirdNumber){
    console.log(secondNumber);
}
else{
    console.log(thirdNumber);

}
// the largest number is 79

/* 
You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
*/
var firstSide = 9;
var secondSide = 8;
var thirdSide = 9;

if(firstSide == secondSide || secondSide == thirdSide || thirdSide == firstSide){
    console.log('triangle is isosceles');
}
else{
    console.log('triangle is not a isosceles');
}

// triangle is isosceles

// var dream = [“I”, “will”, “become”, “a”, “developer”, “inshallah”];

