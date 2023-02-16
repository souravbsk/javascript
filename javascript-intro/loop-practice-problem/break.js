// for loop 
// for(var i = 0; i<7; i++){
//     console.log(i);
//     if(i ==5){
//         break
//     }
// }
/* 
0
1
2
3
4
5
*/


// while loop 

var i = 0;
while(i < 10){
    console.log(i);
    i++;
    if(i > 5){
        break
    }
    
}

/* 
0
1
2
3
4
5
*/


var numbers = [25,45,85,65,75,95,35,24,85];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        break
    }
    console.log(number);
}
/*
25
45
*/

