/* 
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.
*/

const friendName = ['neymar','ucchass','ronaldinho', 'vini','ananta','farhan','akash'];
const evenLength = (friends) => {
    let evenFriend = [];
    for(const friend of friends){
        const friendLength = friend.length;
        if(friendLength % 2 === 0){
            evenFriend.push(friend)
        }
    }
    return evenFriend;
} 
const evenFriend =  evenLength(friendName);
console.log(evenFriend)
// [ 'neymar', 'ronaldinho', 'vini', 'ananta', 'farhan' ]