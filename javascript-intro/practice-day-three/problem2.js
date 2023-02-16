// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum)
}
summation(5)

// multiplication table 
function mulitiTable(num) {

    for (let i = 1; i <= 10; i++) {
        const multiplication = i * num;
        const multiTable = (i + 'x' + num, '=', multiplication);
        console.log(multiTable);

    }
}
mulitiTable(3)


console.log('________________________________________________')
// problem 3


function arrayElement(numArr) {
    let newArr = [];
    for (const number of numArr) {
        if (number > 5) {
            newArr.push(number);
        }
    }
    console.log(newArr.length)
}
const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
arrayElement(numbers)



// problem 4 
// reverse return 
function reverseReturn(nameOne, nameTwo) {
    let largeName;
    if (nameOne.length > nameTwo.length) {
        largeName = nameOne;
    }
    else {
        largeName = nameTwo;
    }

    const reverse = largeName.split('').reverse().join('');
    console.log(reverse)
}
reverseReturn('neymar', 'ronaldinho')


// small person 
// problem 6
const person = [

    { name: 'sakib', age: 30 },

    { name: 'samiul', age: 20 },

    { name: 'sahid', age: 50 },

    { name: 'samin', age: 10 }

]

function youngPerson(persons){
    let littlePerson= persons[0];
    for(const person of persons){
        if(person.age<littlePerson.age){
            littlePerson = person;
        }
    }
    console.log(littlePerson);
}
youngPerson(person)