/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) // json like JSON.parse(). but not similar
      .then(json => console.log(json)) */

function LoadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
}