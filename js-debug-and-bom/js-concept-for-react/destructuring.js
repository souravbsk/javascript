// array destructuring 
const number = [42,65];
const [x,y] = number;
console.log(x,y);
// 42 65


function box(x,y){
    const num =[x,y];
    return num;
}
const [m,n] = box(32,45);
console.log(m,n);
// 32 45


const player = {
    name : 'neymar',
    age: 32,
    friends:['vini','antony','silva']
}

const [first,second,third] = player.friends;
console.log(first,second,third);
// vini antony silva


// object destructuring 
const {name,age} = player;
console.log(name,age);
// neymar 32
const employee = {
    id:'vs code',
    designation:'developer',
    machine:'mac',
    languages:['html','css','js'],
    specification:{
        height:66,
        weight:67,
        address:'new polly',
        drink:'water',
        water:{
            color:'black',
            price:500,
            brand:'garmin'
        }
    }
}


const {designation,machine} = employee;

const {height,weight} = employee.specification;

const {price,brand} = employee?.specification?.water;
console.log(price,brand);
// 500 garmin