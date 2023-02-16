const numbers = [85,25,45,98,46,35,78,82,45,68,85,84];

let arrayNew = [];
for (const number of numbers){
    console.log(number)
    if(number>80){
        arrayNew.push(number)
    }
}
console.log(arrayNew)



function multiply(num1,num2,num3){
    return num1 * num2 * num3;
}
const totalMultiply = multiply(20,20,20);
console.log(totalMultiply);



// object change 
const player = {
    name : 'neymar',
    age : 29,
    position: 'striker',
    achived: 'golden ball',
}
player.achived = 'fifa world cup 2026'
console.log(player)