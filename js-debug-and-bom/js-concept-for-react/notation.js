const player = {
    name: 'neymar',
    address:'brazil',
    10:'star player',
    age:30,
    'star-player':'neymar jr'
}


// dot notation 
console.log(player.name);

// bracket notation
const age = player['age'];
console.log(age);

const addressValue = 'address';
// 30
const playerAddress = player[addressValue];
console.log(playerAddress);
// brazil


const starPlayer = player[10];
console.log(starPlayer);
// star player

const starPlayerName = player['star-player'];
console.log(starPlayerName);
// neymar jr