const friends = [45,15,18,25,65,85,87];

// we can use splice  to cut an array define first value to start the position 
// and define second value to how many element cut 
const spliceFriend = friends.splice(2,3)
console.log(spliceFriend);
// [ 18, 25, 65 ]


// splice can change an array 
console.log(friends);
// [ 45, 15, 85, 87 ];


// we can add multiple element to define after second value 
const addFriend = friends.splice(2,5,777,999,555,66,5);
console.log(friends);
[ 45, 15, 777, 999, 555, 66, 5 ]