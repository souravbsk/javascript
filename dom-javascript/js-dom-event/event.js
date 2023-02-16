// option 1: directly set html 
//<button onclick="document.body.style.backgroundColor = 'red'">Red</button>

// option 2 
function greenColor() {
    document.body.style.backgroundColor = 'green'
}
// option 3
const perpelColor = document.getElementById('purple');
perpelColor.onclick = purple;
function purple() {
    document.body.style.backgroundColor = 'purple'
}

// option 4
const grayColor = document.getElementById('gray');
grayColor.onclick = function () {
    document.body.style.backgroundColor = 'gray'
};

// option 5
const blackColor = document.getElementById('blackColor');
blackColor.addEventListener('click', blackBg)
function blackBg() {
    document.body.style.backgroundColor = 'black'
}

// option 6

const blueColor = document.getElementById('blueColor');
blueColor.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})

// option 7
document.getElementById('pinkColor').addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
})
