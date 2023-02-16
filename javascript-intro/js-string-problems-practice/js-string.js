const name = 'Neymar junior';
console.log(name.length); //whitespace also included as a character 
// output 13


// we can find string character by index position 
console.log(name[0]);
// N
console.log(name[1]);
//e
console.log(name[2]);
// y
console.log(name[3]);
// m 
console.log(name[4]);
// a
console.log(name[5]);
// r
console.log(name[6]);
//  


// string is immutable that's why we can't change a character with index position like array 
const playerName = 'antony';
playerName[0] = 'T';
console.log(playerName);
// antony


// we can find index position with string specific character unsing index of 
const nPosition = playerName.indexOf('t');
console.log(nPosition);
// 2

// if the character is not exist in string output -1 
console.log(playerName.indexOf('x'));
// -1