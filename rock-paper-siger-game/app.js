const displayResult = document.getElementById('result');


function randomNumber() {
    const roundNum = Math.floor( Math.random() * 3) + 1;
    const rock = 1;
    const paper = 2;
    const scissors = 3;

    if (roundNum === rock) {
        return 'rock'
    }
    else if (roundNum === paper) {
        return 'paper'
    }
    else {
        return 'scissors'
    }

}

document.getElementById('rockBtn').addEventListener('click', function () {

    const outputValue = randomNumber();
    if (outputValue === 'rock') {
        displayResult.innerText = `You Tied !!! your result rock and computer result ${outputValue}`

    }
    else {
        displayResult.innerText = `sorry you lost !!! your result rock and computer result ${outputValue}`


    }
   


})
document.getElementById('paper').addEventListener('click', function () {
    const outputValue = randomNumber();
    if (outputValue === 'paper') {
        displayResult.innerText = `You Tied !!! your result paper and computer result ${outputValue}`
    }
    else {
        displayResult.innerText = `sorry you lost !!! your result paper and computer result ${outputValue}`

    }
  
})
document.getElementById('scissors').addEventListener('click', function () {
    const outputValue = randomNumber();
    if (outputValue === 'scissors') {
        displayResult.innerText = `You Tied !!! your result scissors and computer result ${outputValue}`

    }
    else {
        displayResult.innerText = `sorry you lost !!! your result scissors and computer result ${outputValue}`


    }
   
})
setTimeout(() => {
    displayResult.innerText = '';
}, 2000);