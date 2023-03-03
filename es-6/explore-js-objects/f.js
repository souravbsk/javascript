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
const gameMission = player1.game.call(2026);
console.log(gameMission)
