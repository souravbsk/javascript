const phoneDataLoad = async (searchText, limitData) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    displayPhoneData(data.data, limitData)

}
const displayPhoneData = (datas, limitData) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showDiv = document.getElementById('show-div');
    // create sort array 
    if (limitData && datas.length > 10) {
        datas = datas.slice(0, 10)
        showDiv.classList.remove('d-none')
    } else {
        showDiv.classList.add('d-none')
    }

    // error message 
    const errorMessage = document.getElementById('error-message');
    if (datas.length === 0) {
        errorMessage.classList.remove('d-none')
    }
    else {
        errorMessage.classList.add('d-none')

    }
    datas.forEach(data => {
        console.log(data)
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card">
            <img src=${data.image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.phone_name}</h5>
                <p class="card-text">brand : ${data.brand}</p>
                <p class="card-text">slug : ${data.slug}</p>
                <button onclick="phoneDetails('${data.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Details
                    </button>
                </div>
        </div>
    `
        phoneContainer.appendChild(phoneDiv)

    });
    // stop loader 
    isLoaderCheck(false)
}

const dataProcess = (limitData) => {
    isLoaderCheck(true)
    const inputField = document.getElementById('inputField').value;
    phoneDataLoad(inputField, limitData)
}

document.getElementById('searchBtn').addEventListener('click', function () {
    // start loader 
    dataProcess(10)
})

// search with keyboard 
document.getElementById('inputField').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        dataProcess(10)

    }
})
const isLoaderCheck = (isLoading) => {
    const loader = document.getElementById('loader');
    if (isLoading) {
        loader.classList.remove('d-none');
    }
    else {
        loader.classList.add('d-none');
    }
}


// not a best way to load data 
document.getElementById('show-toggle-Btn').addEventListener('click', function () {
    dataProcess()
})

const phoneDetails = async (phoneId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data)
}

const displayPhoneDetails = (items) => {
    console.log(items)
const phoneTitle = document.getElementById('exampleModalLabel');
phoneTitle.innerText = items.name;
const detailsBody = document.getElementById('detailsBody');
detailsBody.innerHTML = `
    <p>${items.releaseDate ? items.releaseDate : 'no release Date Found'}</p>
    <p>${items.others ? items.others.Bluetooth : 'Bluetooth not found'}</p>
    <p>${items.mainFeatures ? items.mainFeatures.memory : 'memory details not found'}</p>
`
}