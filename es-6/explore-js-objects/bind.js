//first object
const player1 = {
    name: 'neymar',
    age:29,
    salary:5000,
    friend:['antony','vini','alison','neymar'],
    game:function(value){
        return value + ' ' + 'is participating in an fifa 2022'
    },
    gameTwo:function(year){
        // this.game()
        return `${this.name} want agin participating in fifa ${year} `
    },
    getTreat : function(amount,tips){
        this.salary = this.salary - amount - tips;
        return this.salary;
    }
}

// second object 
const player2 = {
    name: 'vini',
    age:24,
    salary:2000,
    // friend:['antony','vini','alison','neymar'],
}


// call 
const gameMission = player1.gameTwo.call(player2,2026);
console.log(gameMission)
// vini want agin participating in fifa 2026 
const getTreat = player1.getTreat.call(player2,1000,20);
console.log(getTreat)
// 980




const player3 = {
    name: 'antony',
    age:26,
    salary:6000,
    friend:['antony','vini','alison','neymar'],
}
//apply
const gameMisson2 = player1.gameTwo.apply(player3,[2026])
console.log(gameMisson2)
// antony want agin participating in fifa 2026

const getTreat2 = player1.getTreat.apply(player3,[2000,45]);
console.log(getTreat2)

// 3955



const player4 = {
    name: 'silva',
    age:38,
    salary:5000,
    friend:['antony','vini','alison','neymar'],
}

// bind 
const player4Mission = player1.gameTwo.bind(player4);
const getMission3 = player4Mission(2028);
console.log(getMission3)

const player4Treat = player1.getTreat.bind(player4);
// silva want agin participating in fifa 2028
const getTreat3 = player4Treat(3000,80);
console.log(getTreat3)
// 1920