function userName(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => loadName(data))
}

function loadName(datas){
    const ul = document.getElementById('user-list');
    for(const data of datas){
        const li = document.createElement('li');
        const nameList = data.name;
        li.innerText = `${nameList} Email : ${data.email}`;
        ul.appendChild(li)
      
    }
}