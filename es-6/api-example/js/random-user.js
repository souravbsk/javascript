const randomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}

const displayUser = (user) => {
console.log(user)
document.getElementById('user-img').setAttribute('src',`${user.picture.large}`)
document.getElementById('user-name').innerText = user.name.title + ' '+ user.name.first + ' ' + user.name.last;
document.getElementById('user-email').innerText = user.email;
document.getElementById('user-city').innerText = user.location.city;
document.getElementById('user-country').innerText = user.location.country;
}
randomUser()