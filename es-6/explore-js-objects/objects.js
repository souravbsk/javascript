// 1.1. Object literal syntax (1)
const person = {};
person.name = 'neymar';
person.age = 25;
console.log(person)
// { name: 'neymar', age: 25 }

// 1.2. Object literal syntax (2)
const person1 ={name:'neymar',age:'26'};
console.log(person1)
// { name: 'neymar', age: '26' }



// 2 object constructor 
const person2 = new Object();
person2.firstName = 'sourav';
person2.lastName = 'basak';
console.log(person2)
// { firstName: 'sourav', lastName: 'basak' }

// 3 constructor Function
function Player(fName,lName){
    this.fName = fName;
    this.lName = lName;
}

const player1 = new Player('neymar','jr');
console.log(player1)
// Player { fName: 'neymar', lName: 'jr' }


// 4. Es6 classes (syntactic sugar)
class StarPlayer{
    name;
    age;
    team;
    constructor(name,age,team){
        this.name = name;
        this.age = age;
        this.team = team;
    }
}


const starPlayerName = new StarPlayer('neymar',25,'brazil');
console.log(starPlayerName)
// StarPlayer { name: 'neymar', age: 25, team: 'brazil' }
const starPlayerName2 = new StarPlayer('antony',20,'brazil');
console.table(starPlayerName2)
// StarPlayer { name: 'antony', age: 20, team: 'brazil' }

// 5 object.create method
const car = {
    name:'tesla',
    ceo:'elon mask',
    price:'$25412',
}
const carObject = Object.create(car);
console.log(carObject.ceo)
// elon mask
console.log(carObject.name)
// tesla