// console.log('hello world')
document.getElementById('bg-color').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'gray'
    }
})

document.getElementById('third-center').addEventListener('click',function(){
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'center'
})


document.getElementById('new-friend').addEventListener('click',function(){
const friend = document.getElementById('friend');
    const div = document.createElement('div');
    div.className = 'friend'
div.innerHTML=`
    <h2>New Friend</h2>
    <p>Excepturi iste provident reiciendis ut!</p>
`
friend.appendChild(div)
})