/* 
1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
*/

const people =[
    {name:'Meena',age:20},
    {name: 'Rina', age:15},
    {name: 'Suchorita',age:22}
]

const totalAge = people.reduce((previousAge,currentAge) => previousAge + currentAge.age,0)
console.log(totalAge)
// 57

let SumAge = 0;
for(const peoples of people){
    SumAge += peoples.age; 
}
console.log(SumAge)