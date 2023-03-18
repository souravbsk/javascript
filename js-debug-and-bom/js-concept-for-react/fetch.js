// JSON --> stringify , parse

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

const convertStringify = JSON.stringify(employee);
console.log(convertStringify);

/* 
{"id":"vs code","designation":"developer","machine":"mac","languages":["html","css","js"],"specification":{"height":66,"weight":67,"address":"new polly","drink":"water","water":{"color":"black","price":500,"brand":"garmin"}}}
*/

const convertParse = JSON.parse(convertStringify);
console.log(convertParse);

/* 
{
  id: 'vs code',
  designation: 'developer',
  machine: 'mac',
  languages: [ 'html', 'css', 'js' ],
  specification: {
    height: 66,
    weight: 67,
    address: 'new polly',
    drink: 'water',
    water: { color: 'black', price: 500, brand: 'garmin' }
  }
}
*/



// fetch 
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))



// object key,value,

const OBJKeys = Object.keys(employee);
console.log(OBJKeys);
// [ 'id', 'designation', 'machine', 'languages', 'specification' ]

const OBJValue = Object.values(employee);
console.log(OBJValue);

/* 
[
  'vs code',
  'developer',
  'mac',
  [ 'html', 'css', 'js' ],
  {
    height: 66,
    weight: 67,
    address: 'new polly',
    drink: 'water',
    water: { color: 'black', price: 500, brand: 'garmin' }
  }
]

*/


const ObjPairs = Object.entries(employee);
console.log(ObjPairs);

/* 
[
  [ 'id', 'vs code' ],
  [ 'designation', 'developer' ],
  [ 'machine', 'mac' ],
  [ 'languages', [ 'html', 'css', 'js' ] ],
  [
    'specification',
    {
      height: 66,
      weight: 67,
      address: 'new polly',
      drink: 'water',
      water: [Object]
    }
  ]
]
*/




const products = [
    {name:'laptop',price:2000,color:'black'},
    {name:'phone',price:1500,color:'gray'},
    {name:'Iphone',price:5000,color:'gold'},
    {name:'tablet',price:2300,color:'white'},
    {name:'watch',price:6000,color:'blue'},
];


const newProduct = {name:'computer',price:3500,color:'silver'};

// copy products array and then add newProduct
const newProducts = [...products,newProduct];
console.log(newProducts);

/* 
[
  { name: 'laptop', price: 2000, color: 'black' },
  { name: 'phone', price: 1500, color: 'gray' },
  { name: 'Iphone', price: 5000, color: 'gold' },
  { name: 'tablet', price: 2300, color: 'white' },
  { name: 'watch', price: 6000, color: 'blue' },
  { name: 'computer', price: 3500, color: 'silver' }
]
*/


//create a new array without one specific item
//remove phone means create a new array without the phone

const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);


/* 
[
  { name: 'laptop', price: 2000, color: 'black' },
  { name: 'Iphone', price: 5000, color: 'gold' },
  { name: 'tablet', price: 2300, color: 'white' },
  { name: 'watch', price: 6000, color: 'blue' }
]
*/