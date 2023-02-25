// object destructuring
 const fish = {
    name : 'king Hilsa',
    address: 'chandpur',
    color: 'sliver',
    phone: '01257853',
    price:4000
}
const {name,color,address,phone,price} = fish;
console.log(name)
// king Hilsa
console.log(address)
// chandpur
console.log(color)
// sliver
console.log(phone)
// 01257853
console.log(price)
// 4000


// array destructuring

const [first,second] = [15,25,16,85];
console.log(first,second)
// 15 25

const player = ['neymar','messi','ronaldo'];
const [starPlayer, lamePlayer, goat] = player;
console.log(starPlayer,lamePlayer,goat)
// neymar messi ronaldo


// _________________________
function getName(){
    return ['alim','halim']
}
const [kaka,chaca] = getName();
console.log(kaka,chaca)

// alim halim