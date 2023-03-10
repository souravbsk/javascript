const newSLoaded = async () => {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f43120426f9f4f30ba65d5b7f6e4d272');
    const data = await res.json();
    if(data.status !== 'ok'){
        alert('no data found');
        return
    }
    displayShowData(data.articles)
}
newSLoaded()

const displayShowData = (datas) => {
    const cardContainer = document.getElementById('card-container');
    datas.forEach(data => {
        console.log(data);
 
        const {urlToImage,title,content} = data;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src=${urlToImage} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${content}</p>
                <div class="text-end">
                    <button onclick="singleData(${JSON.stringify(datas).split('"').join("&quot;")})" type="button" class="btn btn-dark">Details</button>
                </div>
            </div>
        </div>
        `
        cardContainer.appendChild(div)
    });
}

const singleData = (datas) => {
    console.log(datas);

};


setTimeout(() => {
    console.log('hello');
}, 1000);