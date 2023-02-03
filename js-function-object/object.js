/* object syntax
 var objectName = {
    key: value,
    key: value,
    key: value,
}
 */

var phone = {
    brand : 'redmi',
    model : 'redmi 7',
    color: 'navy Blue',
    price:13000,
    ram:'6gb'

}
console.log(phone);
/* 
{
    brand: 'redmi',
    model: 'redmi 7',
    color: 'navy Blue',
    price: 13000,
    ram: '6gb'
  }
*/

var myComputer = {
    name:'dell',
    price:45000,
    harddisk:'4tr',
    color:'sliver'
}
console.log(myComputer);
// { name: 'dell', price: 45000, harddisk: '4tr', color: 'sliver' }

// get property with key 
console.log(myComputer.price);
// 45000

// set property 
myComputer.price = 50000;
console.log(myComputer);
// { name: 'dell', price: 50000, harddisk: '4tr', color: 'sliver' }


