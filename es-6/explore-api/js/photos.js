fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => displayData(data))
function displayData(datas){
    const photoWarper = document.getElementById('photos-warper');
    for(const data of datas){
        const div = document.createElement('div');
        div.classList.add('photo-div')
        div.innerHTML =  `
        <h3>${data.title}</h3>
        <img src=${data.thumbnailUrl} />
        <p>${data.url}</p>
        `
        photoWarper.appendChild(div)
    }
}
