const player = {
    name: 'neymar',
    age: 29,
    friend:{
        name: 'antony',
        age:26,
        friends:{
            name: 'vini jr',
            age: 28,
        }
    }
}

// dot notation 
const antonyName = player.friend.name;
console.log(antonyName)
// antony


// bracket Notation 
const antonyAge = player['friend']['friends'];
console.log(antonyAge)
// { name: 'vini jr', age: 28 }

const subject = 'name';
const viniName = player['friend']['friends'][subject];
console.log(viniName)
// vini jr



/* 
accessing their property using dot notation:
obj.123; //syntaxError
obj.123name:// syntaxError
obj.name123  : ok
obj.$name; //ok
obj.name-123; //syntaxError
obj.'name-123'; //syntaxError
obj.NAME; //ok
onj.name;  //ok
*/


/* 
but none of this is a problem for the bracket notation
obj['123']; //ok
obj['123name']:// ok
obj['name123']  : ok
obj['$name']; //ok
obj['name-123']; //ok
obj[''name-123'']; //ok
obj['NAME']; //ok
onj['name'];  //ok
*/