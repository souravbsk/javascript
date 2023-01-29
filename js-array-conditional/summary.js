var destinations = ['sajek','coxsbazar','nepal','bali','sp']
/* 
index position number start with 0;
*/
// if get a value with index number 
console.log(destinations[2]);
// if set a value with index number 
destinations[2] = 'thailand';

// to get a index position number with value name 
destinations.indexOf('nepal')


// add a value of array last position by push 
destinations.push('vutan')
//remove a value of array last position by pop
destinations.pop();
//store it on a variable
var removeItem = destinations.pop();

//add a value bigener of array by unshift()
destinations.unshift('bangladesh')
//remove a value bigener of array by shift();
destinations.shift()
// store it on a variable
var RemovItem = destinations.shift();



// conditionals
// <,>,==,!=,<=,>=,
//&&,||

if(destinations[1] == 'sajek'){

}
else if(destinations[2] == 'vutan'){

}
else if(destinations.length == 5){

}
else{
    
}
