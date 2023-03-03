/* 
Change the value stored in the storeFalsyValue variable to a falsy value,
such that the code in the else statement executes.
*/

let storeFalsyValue = true;
if (!storeFalsyValue) {
    console.log(`Nothing to show!`);
}
else {
    console.log(`You are amazing!`);
}


const calculate = (num1, num2, operation) => {
    if (operation === 'add') {
        return num1 + num2;
    }
    else if(operation === 'subtract'){
        return num1 - num2;
    }
    else if(operation === 'multiply'){
        return num1 * num2;
    }
    else if(operation === 'divide'){
        return num1 / num2;
    }
    else if(operation === 'modulus'){
        return num1% num2;
    }
    else{
        return 'invalid operation'
    }
}

console.log(calculate(2,5,'add'))
// 7
console.log(calculate(7,5,'subtract'))
// 2
console.log(calculate(7,5,'multiply'))
// 35
console.log(calculate(7,5,'divide'))
// 1.4
console.log(calculate(7,5,'modulus'))
// 2
console.log(calculate(7,5,'invlaue'))
// invalid operation



const player = {
    name:'neymar',
    age:29,
    position:'striker',
    dream: () => {
        console.log(this.name, 'want to win fifa', this.age)
    }
}


player.dream()
