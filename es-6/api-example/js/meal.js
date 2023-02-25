const foodLoaded = (value) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.meals))
}

const displayUser = (datas) => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    datas.forEach(data => {
        console.log(data);
        const mealDb = document.createElement('div');
        mealDb.classList.add('col')
        mealDb.innerHTML = `
    <div class="card">
                    <img src=${data.strMealThumb} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.strMeal}</h5>
                        <p class="card-text">${data.strInstructions.length > 200 ? data.strInstructions.slice(0, 200) + '...' : data.strInstructions}</p>
                        <p class="card-text">Category: ${data.strCategory}</p>
                        <button onClick="singleItem(${data.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealdbToggle">
                            Food Details
                        </button>
                    </div>
                </div>
    `
        mainContainer.appendChild(mealDb)

    });
}


document.getElementById('search-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const fieldValue = document.getElementById('search-field').value;
    console.log(fieldValue)
    foodLoaded(fieldValue)


})

const singleItem = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleItem(data.meals[0]))
}

const displaySingleItem = (item) => {
document.getElementById('mealdbToggleLabel').innerText = item.strMeal;
document.getElementById('item-content').innerHTML = 
`
<img class='img-fluid' src=${item.strMealThumb} />
`
}