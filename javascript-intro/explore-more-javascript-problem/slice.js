const friends = [45,15,18,25,65,85,87];

// slice crop an array with index position 
const sliceFriend = friends.slice(2);
console.log(sliceFriend);
// [ 18, 25, 65, 85, 87 ]
const sliceFriend2 = friends.slice(2,5);
console.log(sliceFriend2);
// [ 18, 25, 65 ]

//but original array con't change
console.log(friends);
// [45, 15, 18, 25, 65, 85, 87]