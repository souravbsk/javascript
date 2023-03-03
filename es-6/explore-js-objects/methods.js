const player = {
    name: 'neymar',
    age:26,
    salary:5000,
    friend:['antony','vini','alison','neymar'],
    game:function(){
        return this.name + ' ' + 'is participating in an fifa 2022'
    },
    gameTwo:function(year){
        this.game()
        return `${this.name} want agin participating in fifa ${year} `
    },
    getTreat : function(amount,tips){
        this.salary = this.salary - amount - tips;
        return this.salary;
    }
}
const gameMission = player.game();
// console.log(gameMission)
// neymar is participating in an fifa 2022


const aginMission = player.gameTwo(2026);
console.log(aginMission)
// neymar want agin participating in fifa 2026 


// const treaTMission = player.getTreat(2000);
const treaTMission = player.getTreat(2000,20);
console.log(treaTMission)
// 2980
