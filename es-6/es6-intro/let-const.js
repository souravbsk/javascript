/* 
let : let it to reassign
const : do not allow it to reassign
*/



// reassign allow
let name = 'neymar';
name = 'antony'
console.log(name)
// antony

// not allow 
// let player = 'neymar';
// let player = 'messi';
// error 



// reassign not allow 
const starName = 'ronaldinho';
// starName = 'ronaldo';
console.log(starName)
// TypeError: Assignment to constant variable.





// modify allow 
const playerAge = [25,45,63,23,15];
playerAge.push(85); 
console.log(playerAge)
// [ 25, 45, 63, 23, 15, 85 ]

playerAge[2] = 102
console.log(playerAge)
// [ 25, 45, 102, 23, 15, 85 ]