// select all dom
const buttons = document.querySelectorAll('#card_btn .btn');
const selectedPlayer = document.getElementById('selected');


// Button click and selected player update
function addPlayer(playerName){
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);
}

for(const button of buttons){
    button.addEventListener('click' , (e)=>{
        if(selectedPlayer.children.length <= 4){
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
        } else{
            button.classList.remove('disabled');
            addPlayer(button.parentNode.children[0].innerText)
            alert('5 Played already Selected');
        }
    })
} 

// A common function for getInput value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldNumber;
};

function getValueOfElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



// Budgets add event listeners
document.getElementById('calculate_budget').addEventListener('click', function(){
    const selectedPlayer = document.querySelectorAll('#selected > li');
    if(selectedPlayer.length === 0 ){
        alert('please addes a player ');
        return
    }
 
    const perPlayerBudget = getInputValue('per_player_budget');
    if(perPlayerBudget < 0 || isNaN(perPlayerBudget) || perPlayerBudget === ''){
        alert('please enter positive value');
        return
    }
    let totalPlayerExpense =  perPlayerBudget * 5;
    getValueOfElement( 'player_expense', totalPlayerExpense)  
})
document.getElementById('calculate_total_budget').addEventListener('click', function(){
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText)
    const managerBudget = getInputValue('manager_budget');
    const coachBudget = getInputValue('coach_budget');
    if(managerBudget < 0 || coachBudget < 0 || isNaN(managerBudget) || isNaN(coachBudget)){
        alert('please enter positive value');
        return
    }

    let totalExpense = playerTotalBudget + managerBudget + coachBudget;
        getValueOfElement( 'player_total_expense', totalExpense)
})

