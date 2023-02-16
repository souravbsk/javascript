// variable
// string type variable 
var name = 'neymar';

//numeric type variable
var age = 29;

//boolean type variable 
var isStarPlayer = true;

//array
var player = [ 'neymar','ronaldinho','silva','kaka','vinijr','antony']
// find array length
console.log(player.length);

// to get value with index number 
var findItem = player[2];

//to set value with index number
player=[4] = 'alison';

// index of
var neymarPositon = player.indexOf('neymar');

//push & pop
//unshift & shift

// conditional 
if(player.length == 5){
    console.log('star plyar');
}
else if( player.length == 11){
    console.log('play game');
}
else{
    console.log('need some player');
}

// meth operation 
// <,>,<=,>=,==,!=,%,+,-,*,/,&&,||