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
    const previousDepositValue = getElementValueById('deposit-total');
    const newDepositTotal = previousDepositValue + newDepositValue;
    setElementValueById('deposit-total', newDepositTotal)
    calBalanceTotal(newDepositValue, true)
})
// withdraw balance 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawValue = getInputValue('withdraw-field');
    if (isNaN(newWithdrawValue)) {
        errorMessage()
        return;
    }
    const previousWithdrawValue = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawValue + newWithdrawValue;
    setElementValueById('withdraw-total', newWithdrawTotal);
    calBalanceTotal(newWithdrawValue, false)
})

document.getElementById('error-hide-btn').addEventListener('click', function () {
    document.getElementById('error-div').classList.add('hidden');
})
