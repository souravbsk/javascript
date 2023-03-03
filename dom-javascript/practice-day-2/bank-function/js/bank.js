// get input field value 
function getInputValue(inputID) {
    const getInputField = document.getElementById(inputID);
    const getInputValueString = getInputField.value;
    const getInputValue = parseFloat(getInputValueString);
    getInputField.value = '';
    return getInputValue;
}

//get element field value 
function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;


}

//set element field value
function setElementValueById(elementId, totalValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = totalValue;

}

//balanceTotalCalculate
function calBalanceTotal(transitionName, transitionCondition) {
    const balanceELementID = 'balance-total';
    const balanceTotal = getElementValueById(balanceELementID);
    let currentBalanceAmount = 0;
    if (transitionCondition) {
        currentBalanceAmount = balanceTotal + transitionName;
    }
    else {
        currentBalanceAmount = balanceTotal - transitionName;

    }
    setElementValueById(balanceELementID, currentBalanceAmount)
    return currentBalanceAmount;
}

function errorMessage() {
    document.getElementById('error-div').classList.remove('hidden');
    document.getElementById('error-div').classList.add('block');
    document.getElementById('error-message').innerText = 'Please enter a valid amount';
}

// deposit balance 
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositValue = getInputValue('deposit-field');
    if (isNaN(newDepositValue)) {
        errorMessage()
        return
    }
    const balanceTotal = document.getElementById('balance-total').innerText;
    const previousDepositValue = getElementValueById('deposit-total');
    const newDepositTotal = previousDepositValue + newDepositValue;
    setElementValueById('deposit-total', newDepositTotal)
    const getCurrentValue =  calBalanceTotal(newDepositValue, true)
    

    const li = document.createElement('li');
    li.innerHTML = `Deposit Balance ${newDepositValue} Tk. total Balance ${balanceTotal} + ${newDepositValue} = ${getCurrentValue} Tk.`;
    li.classList.add('list-inside','list-decimal','border-b-2','border-indigo-200', 'py-3')
    document.getElementById('deposit-list').appendChild(li)
})
// withdraw balance 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawValue = getInputValue('withdraw-field');
    if (isNaN(newWithdrawValue)) {
        errorMessage()
        return;
    }
    const balanceTotal = document.getElementById('balance-total').innerText;
    const previousWithdrawValue = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawValue + newWithdrawValue;
    setElementValueById('withdraw-total', newWithdrawTotal);
    const getCurrentValue = calBalanceTotal(newWithdrawValue, false)
    
    const li = document.createElement('li');
    li.innerHTML = `Withdraw Balance ${newWithdrawValue} Tk. total Balance ${balanceTotal} - ${newWithdrawValue} = ${getCurrentValue} Tk.`;
    li.classList.add('list-inside','list-decimal','border-b-2','border-indigo-200', 'py-3')
    document.getElementById('withdraw-list').appendChild(li)
})

document.getElementById('error-hide-btn').addEventListener('click', function () {
    document.getElementById('error-div').classList.add('hidden');

})
