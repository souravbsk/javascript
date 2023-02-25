const loadCountrys = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountrys(data))
}
const displayCountrys = (countrys) => {
    const countryWarper = document.getElementById('country-warper');

    countrys.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <img src=${country.flags.png}  />
            <h3>Name: ${country.name?.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'no capital'}</p>
            <button onClick="loadCountryDetails('${country.cca2}')">Details</button>
            `
        countryWarper.appendChild(div)
    });

   
}

const loadCountryDetails = (code) => {
const url = `https://restcountries.com/v3.1/alpha/${code}`;
fetch(url)
.then(res => res.json())
.then(data => displayCuntryDetails(data[0]))
}


const displayCuntryDetails = (country) => {
const countryDetails = document.getElementById('coutnryDtails');
countryDetails.innerHTML = `
<h2>Name: ${country.name?.common}</h2>
<p>population: ${country.population}</p>
<img src=${country.flags.png} alt="">
`
}
loadCountrys()