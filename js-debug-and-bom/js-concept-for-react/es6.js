const player = {
    name : 'neymar',
    age: 32,
    friends:['vini','antony','silva']
}


// 1 template string 
const bio = `brazil star player name ${player.name}. her age ${player.age}. her friend list
${player.friends}`;
console.log(bio);
/* 
brazil star player name neymar. her age 32. her friend list
vini,antony,silva
*/


// arrow function 
const withoutParameter = () => 56;
const isEven = (x) => x%2 ===0;
const addThree = (x,y,z) => x+y+z;
const doMath = (num1,num2) => {
    const sum = num1 + num2;
    return sum;
}



// spread operator 
const marks = [25,35,78,65];
const newMarks = [...marks];
marks.push(25)
console.log(newMarks);
console.log(marks);
// [ 25, 35, 78, 65 ]    
// [ 25, 35, 78, 65, 25 ]

const newElement =[...marks,65];
console.log(newElement);
// [ 25, 35, 78, 65, 25, 65 ]