
// cut a specific value with index position 
var player = ['neymar','messi','ronaldo','ronaldiho','kaka'];
player.splice(2,1);
console.log(player);
// [ 'neymar', 'messi', 'ronaldiho', 'kaka' ]



//cut a specific value and also added a value (replace)
var player1 = ['neymar','messi','ronaldo','ronaldiho','kaka'];
player1.splice(2,2,'pogba')
console.log(player1);
// [ 'neymar', 'messi', 'pogba', 'kaka' ]


// add a value without remove any value with index value 
var player2 = ['neymar','messi','ronaldo','ronaldiho','kaka'];
player2.splice(2,0,'antony')
console.log(player2);

// [ 'neymar', 'messi', 'antony', 'ronaldo', 'ronaldiho', 'kaka' ]