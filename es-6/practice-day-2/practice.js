const player ={
    age:23,
    name:'neymar',
    isStarPlayer: true,
    friends: ['vini','antony','alison','silva'],
    copany:{
        name:'neymar jr',
        manager: 'neymar sinior'
    },
    dream:function(){
        return this.name + ' want to win fifa world cup'
    }
}

const dream = player.dream()
// neymar want to win fifa world cup
console.log(dream)
const story = `${player.name}, is a star player , age ${player.age}, friends ${player.friends[0]}`
const pera = window.document.getElementById('pera').innerText = story;

const friendList = document.getElementById('friend-list');
player.friends.forEach(friend => {
    const friendLi = document.createElement('li');
    friendLi.innerText = friend;
    friendList.appendChild(friendLi)
});



const sum = (num1,num2) => {
    const total = num1 + num2;
    const divideTwo = total / 2;
    if(divideTwo % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(sum(5,8))