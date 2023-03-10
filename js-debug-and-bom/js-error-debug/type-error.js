const number= 8;
// number.push(45) //TypeError: number.push is not a function

let address;
// console.log(address.home); //TypeError: Cannot read properties of undefined (reading 'home')

let address1 = {};
// console.log(address1.home); //undefined


let address2 = {city:'bBaria',postCode:4560};
// console.log(address2.home.building); //TypeError: Cannot read properties of undefined (reading 'building')
// console.log(address2.home?.building); //undefined


const a  ='alien';
// a = 'messi';
// console.log(a); //TypeError: Assignment to constant variable.


const name = 'sourav'

for (let i = 0; i < 10; i++) {
    console.log(name);
    
}