class Player {
    name;
    age;
    position;
    job = 'footballer';
    team = 'brazil';
    constructor(playerName,playerAge,playerPosition){
        this.name = playerName;
        this.age = playerAge;
        this.position = playerPosition;
    }
    getMission(year,trophy){
        console.log(`${this.name} want to win ${year} ${trophy}`)
    }
    transferValue(team,price){
        console.log(`${this.name}  transfer to the ${team}. market Value ${price}`)
    }
}

const neymar = new Player('neymar',29,'striker');
console.log(neymar)
/* 
Player {
  name: 'neymar',
  age: 29,
  position: 'striker',
  job: 'footballer',
  team: 'brazil'
}
*/
neymar.getMission(2026,'fifa worldcup')
// want to win 2026 fifa worldcup
neymar.transferValue('barselona',20000000)
// transfer to the barselona. market Value 20000000



/* 
const neymar = new Player();
console.log(neymar)
Player {
  name: undefined,
  age: undefined,
  position: undefined,
  job: 'footballer',
  team: 'brazil'
}
*/


// ________________________________________________________________________
// 2
const alison = new Player('alison breker',32,'goalkeeper');
console.log(alison)

/* 
Player {
  name: 'alison breker',
  age: 32,
  position: 'goalkeeper',
  job: 'footballer',
  team: 'brazil'
}
*/
alison.getMission(2026,'fifa');
// alison breker want to win 2026 fifa


alison.transferValue('mancity',1800000);
// alison breker  transfer to the mancity. market Value 1800000



