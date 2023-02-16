
// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

function multiTable(num) {
    for (let i = 1; i <= 10; i++) {
        const multiply = i * num;
        console.log(num, '*', i, '=', multiply)
    }
}
multiTable(13)



//একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
function convertCase(text) {
    return text.toLowerCase()
}
const caseOutput = convertCase('Hello I WANt to Be A WEB developer')
console.log(caseOutput)


//fullName নামে একটা ফাংশন

function fullName(firstName, lastName) {
    const fullNameConvert = firstName + ' ' + lastName;
    return fullNameConvert;
}

const fullNameOutput = fullName('neymar', 'junior');
console.log(fullNameOutput)



//একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।


function sqrNam(num) {
    const convertSqr = Math.pow(num, 2);
    return convertSqr;
}
const numberSqr = sqrNam(2);
console.log(numberSqr)




//pepperoni প্রিন্ট করবা।


const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}
console.log(pizza.toppings[2])




// foo bar 
function foo(){

    console.log('foo')
    bar()
}
function bar() {
    console.log('bar')
}
foo()



// makeavg 
function make_avg(num1,num2,num3){0
    const sumofNum = num1+num2+num3;
    return sumofNum / 3;

}

const avgNumber = make_avg(12,36,45);
console.log(avgNumber)


function make_avg1(numbers){
    let sum = 0;
    for(const number of numbers){
        sum +=number;
    }
    return sum / numbers.length;
}

const arrayNum = [2,5,4,6,9,8];
const avgOutput = make_avg1(arrayNum);
console.log(avgOutput)

// odd even 

function odd_evan(num){
    if(num % 2 !==0){
        return 'odd'
    }
    return 'evan'
} 

const otputOddEvan = odd_evan(3);
console.log(otputOddEvan)



// another one 
function odd_even1(num){
    console.log(num %2 !==0)
}
odd_even1(2)



// switch case 

const traffic = 'green';
switch(traffic){
    case 'green':
        console.log('please go');
        break
        case 'red' :
            console.log('warning please stop')
            break
            default:
                console.log('wait a munite')
}