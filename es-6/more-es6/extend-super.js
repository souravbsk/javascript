// parent class 
class Player {
    name;
    age;
    position;
    constructor(playerName,playerAge,playerPosition){
        this.name = playerName;
        this.age = playerAge;
        this.position = playerPosition;
    }
    getMission(year,trophy){
        console.log(`${this.name} want to win ${year} ${trophy}`)
    }
}

// child class 
class FootballPlayer extends Player{
    job = 'player';
    team = 'brazil';
    constructor(playerName,playerAge,playerPosition){
       super(playerName,playerAge,playerPosition)
    }
    transferValue(team,price){
        console.log(`${this.name}  transfer to the ${team}. market Value ${price}`)
    }
}
const neymar = new FootballPlayer('neymar','age','striker')
 console.log(neymar)

/* 
 FootballPlayer {      
    name: 'neymar',     
    age: 'age',
    position: 'striker',
    job: 'player',      
    team: 'brazil'      
  } 
  
*/
neymar.getMission(2026,'fifa')
//  neymar want to win 2026 fifa

// child class 
class cricketPlayer extends Player {
    job ;
    team;
    constructor(playerName,playerAge,playerPosition,playerJob,playerTeam){
        super(playerName,playerAge,playerPosition)
        this.job = playerJob;
        this.team = playerTeam;
    }
    getMission(year,trophy){
        console.log(`${this.name} want to win ${year} ${trophy}`)
    }
    transferValue(team,price){
        console.log(`${this.name}  transfer to the ${team}. market Value ${price}`)
    }
}

const sakibAllHasan = new cricketPlayer('sakib al hasan',32,'all rounder', 'Cricketer','Bangladesh');
console.log(sakibAllHasan)

/* 
cricketPlayer {
  name: 'sakib al hasan',
  age: 32,
  position: 'all rounder',
  job: 'Cricketer',
  team: 'Bangladesh'
}
*/

