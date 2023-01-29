const number  = [45,85,76,95,15,65,25,35];
// [45, 85, 76, 95, 15, 65, 25, 35]

// get array element by index number []___________
console.log(number[0]);
// 45
console.log(number[1]);
// 85
console.log(number[2]);
// 76


//set array element by index number []_______
number[2] = 69; // replace 76 = 69
console.log(number);
// [45, 85, 69, 95, 15, 65, 25, 35]

number[5] = 105;
console.log(number);
// [45,  85, 69, 95, 15, 105, 25, 35]


// find a index number with value by indexof
var players = ['neymar', 'pele', 'ronaldinho', 'ronaldo', 'kaka'];
var starPlayer = players.indexOf('ronaldinho');
console.log(starPlayer);
// 2

var cr7 = players.indexOf('ronaldo');
console.log(cr7);
// 3


//if doesn't exist value in a array
var notExist = players.indexOf('messi');
console.log(notExist);
// -1


