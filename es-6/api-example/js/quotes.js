const loadData = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = (quote) => {
    document.getElementById('quotes').innerText = quote.quote
}
