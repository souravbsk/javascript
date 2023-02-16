
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';

    return inputValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setElementValueBtId(elementID,newValue){
    const elementField = document.getElementById(elementID);
    elementField.innerText = newValue;
}

function templateSummaryList(newInputValue,balanceTotal,currentBalance,summaryValue){
    const li = document.createElement('li');
    li.classList.add('list-inside','list-decimal','border-b-2','border-indigo-200', 'py-3');
   if(summaryValue){
    li.innerHTML = `Deposit Balance ${newInputValue} Tk. total Balance ${balanceTotal} + ${newInputValue} = ${currentBalance} Tk.`;
    document.getElementById('deposit-list').appendChild(li)
   }
   else{
    li.innerHTML = `Withdraw Balance ${newInputValue} Tk. total Balance ${balanceTotal} - ${newInputValue} = ${currentBalance} Tk.`;
    document.getElementById('withdraw-list').appendChild(li)
   }
}