// 1. How to declare a variable using let and const
const name = 'neymar jr';
let age = 32;
age = 30;

// 2. 6 basic condition : >,<,>=,<=,===,!==
    // multiple condition: || $$
if(name === "Neymar" || age < 32){

}
else if(age < 32){

}
else{


}

// 3 declare array
    // length //to check array length;
    //indexof . to check array value index position
const marks = [25,35,78,65];
console.log(marks.length);

console.log(marks[0]);

// 4 for loop .

for(let i = 0; i<marks.length; i++){
    console.log(marks[i]);
}

// 5 function

function addition(x,y){
    return x+y;
}
const additionValue = addition(3,2);
console.log(additionValue);


// 6 object 
const player = {
    name : 'neymar',
    age: 32,
    friends:['vini','antony','silva']
}

// find object value 
console.log(player.name);
console.log(player['age']);
const friendList = friends;
console.log(player[FileList]);