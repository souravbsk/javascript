fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => loadPost(data))

function loadPost(datas){
    const postContainer = document.getElementById('post-warpper');
    for(const data of datas){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
        `
        postContainer.appendChild(div)

    }
}