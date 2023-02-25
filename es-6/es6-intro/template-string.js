// single quotation
const person1 = 'neymar';
// double quotation
const person2 = "pele";
// backtick quotation
const person = `antony`;

// multiLine with line break
const multiLine = "iam a wordpress web designer \n"+
'i want to be a we developer \n' + 
"i want to job in outside \n";
console.log(multiLine)
/*
iam a wordpress web designer 
i want to be a we developer
i want to job in outside 
*/


// multiline with template string 
const newMultiline =  `iam a front end web designer. 
i have experian about html,css, js, react.
i want to be a web developer
`
console.log(newMultiline)
/* 
iam a front end web designer. 
i have experian about html,css, js, react.
i want to be a web developer
*/


// template literals  with dynamic value

const playerName = 'neymar';
const age = 29;
const friend = ['vini','ronaldiho','antony','raphina']
const pera = `brazilian star player name ${playerName}. her age ${age}. he has ${friend.length} friend`
console.log(pera)
// brazilian star player name neymar. her age 29. he has 4 friend