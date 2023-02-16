document.querySelector('section').style.color = 'red';

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h2 = document.createElement('h2');
h2.innerText = 'Skill';
section.appendChild(h2)
const ul = document.createElement("ul");
section.appendChild(ul)
const li1 = document.createElement('li');
li1.innerText = 'html'
ul.appendChild(li1)
const li2 = document.createElement('li');
li2.innerText = 'css'
ul.appendChild(li2)
const li3 = document.createElement('li');
li3.innerText = 'js'
ul.appendChild(li3)
mainContainer.appendChild(section)


const section2 = document.createElement('section');
section2.innerHTML = `
<h2>second div</h2>
<ul>
<li>phone</li>
<li>Laptop</li>
<li>computer</li>
</ul>
`
mainContainer.appendChild(section2)