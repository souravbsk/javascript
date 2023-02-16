const player = {
    name:'neymar',
    age:31,
    profession : 'footballer',
    isStarPlayer : true,
    friend:['vini','antony','alison','alison','silva'],
    car : {
        name : 'tesla',
        made : 2022,
        ceo: {
            name : 'elon mask',
            home: 'USA',
             mission: function() {
                console.log ('buy the space')
            } 
        }
    },
    mission: function(){
        console.log('win 2026 fifa')
    }
}
console.log(player)


/* 

{
  name: 'neymar',
  age: 31,
  profession: 'footballer',
  isStarPlayer: true,
  friend: [ 'vini', 'antony', 'alison', 'alison', 'silva' ],
  car: {
    name: 'tesla',
    made: 2022,
    ceo: { name: 'elon mask', home: 'USA', mission: [Function: mission] }
  },
  mission: [Function: mission]
}
*/


player.mission()
// win 2026 fifa