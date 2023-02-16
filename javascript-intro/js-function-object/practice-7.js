const fabPerson = {
    name:'neymar',
    age:29,
    friends:['antony','vini','raphinha','alison','ederson']
}
console.log(fabPerson.friends.length)
// 5



function friendCheaker(friends){
    const maleFriend = []
    for(const friend of friends){
        if(friend['gender'] === 'male'){
           maleFriend.push(friend);
        }
    }
    return maleFriend;

}


const neymarFriend = [
    {name:'antony',age:28,gender:'male'},
    {name:'vini',age:26,gender:'male'},
    {name:'ellea',age:28,gender:'female'},
    {name:'rina',age:18,gender:'female'},
    {name:'emme',age:28,gender:'male'},
    {name:'sabrina',age:28,gender:'female'},
    {name:'alia',age:28,gender:'male'},
    {name:'pallabi',age:28,gender:'female'},
]
const result = friendCheaker(neymarFriend);
console.log(result.length , '=', result)

let first =5;
let second = 7;
console.log(first,second);
[first,second] = [second,first]
console.log(first,second)