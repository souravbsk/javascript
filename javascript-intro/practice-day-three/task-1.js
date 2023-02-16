// variable 
const name = 'neymar';
const age = 29;
const isStarPlayer = true;


// chang variable
const dontChange = 'neymar';
let change = 'messi';
change = 'ronaldo'


// math 
const num1 = 25;
const num2 = 45;
const sum = num1 + num2;

const sub = num1 - num2;

const multiply = num1 *num2;
const devide = num1 / num2;
const remain = num1 % num2;

// 4
// condition 
const mark1 = 45; 
const mark2 = 95;

console.log(mark1>mark2);
console.log(mark1>=mark2);
console.log(mark1<mark2);
console.log(mark1<=mark2);
console.log(mark1==mark2);
console.log(mark1!==mark2);
console.log(mark1!==mark2 && mark1 > mark2);
console.log(mark1!==mark2 || mark2 == mark1);




// 6
if(mark1 < mark2){
    console.log('mark1 small');
}
else{
    console.log(mark2, 'small')
}

// 7
// while loop

let x =7;
while(x<=19){
    if(x%2 !==0){
        console.log(x);
    }
    x++
}

console.log('_________________________________');
// 8
const frined =['neymar','vini','antony','ronaldinho','ronaldo','alison'];
console.log(frined.length);

const spliceFriend = frined.splice(4,1,'alien','sourav');
console.log(spliceFriend);
console.log(frined);
frined.pop();
console.log(frined);


// regular for loop
for(let i = 0; i<frined.length;i++){
    const friendElement = frined[i];
    console.log(friendElement);
}

// for of

for(const frnd of frined){
    console.log('element', frnd);
}



