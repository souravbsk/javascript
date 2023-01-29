var players = ['neymar', 'pele', 'ronaldinho', 'ronaldo', 'kaka']


// use push to add new Element to the end of an array
players.push('silva');
console.log(players); 
// [ 'neymar', 'pele', 'ronaldinho', 'ronaldo', 'kaka', 'silva' ]

players.push('alison',"ederson");
console.log(players);
// ['neymar','pele','ronaldinho','ronaldo','kaka','silva','alison', 'ederson']




//pop method removes the last element from an array
var player1 = ['neymar', 'pele', 'ronaldinho', 'ronaldo', 'kaka'];
player1.pop();
console.log(player1);
// [ 'neymar', 'pele', 'ronaldinho', 'ronaldo' ]

player1.pop()
console.log(player1);
// [ 'neymar', 'pele', 'ronaldinho' ]


// get a value using pop and store a variable 
var popItem = player1.pop();
console.log(player1);
// [ 'neymar', 'pele' ]
console.log(popItem);
// ronaldinho