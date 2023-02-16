document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInputField = document.getElementById('deposit-field');
    const newDepositValueString = depositInputField.value;
    const newDepositValue = parseFloat(newDepositValueString);
    depositInputField.value = '';
    if(isNaN(newDepositValue)){
        alert('enter a valid value');
        return
    }


    // get deposit balance 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositValueString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositValueString);

    const newDepositTotal = previousDepositTotal + newDepositValue;
    depositTotalElement.innerText = newDepositTotal;


    // get balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    console.log(balanceTotal)

    const newCurrentBalance = balanceTotal + newDepositValue;
    balanceTotalElement.innerText = newCurrentBalance;

    const li = document.createElement('li');
    li.innerHTML = `Deposit Balance ${newDepositValue} Tk. total Balance ${balanceTotal} + ${newDepositValue} = ${newCurrentBalance} Tk.`;
    li.classList.add('list-inside','list-decimal','border-b-2','border-indigo-200', 'py-3')
    document.getElementById('deposit-list').appendChild(li)
})


// withdraw 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInputField = document.getElementById('withdraw-field');
    const withdrawValueString = withdrawInputField.value;
    const newWithdrawValue = parseFloat(withdrawValueString);
    withdrawInputField.value = '';
    if(isNaN(newWithdrawValue)){
        alert('enter a valid value');
        return;
    }

    // get withdrawElement 
    const withdrawAmountElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawAmountElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const newWithdrawBalance = previousWithdrawTotal + newWithdrawValue;
    withdrawAmountElement.innerText = newWithdrawBalance;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);



    const currentBalance = balanceTotal - newWithdrawValue;
    balanceTotalElement.innerText = currentBalance;

    const li = document.createElement('li');
    li.innerHTML = `Withdraw Balance ${newWithdrawValue} Tk. total Balance ${balanceTotal} - ${newWithdrawValue} = ${currentBalance} Tk.`;
    li.classList.add('list-inside','list-decimal','border-b-2','border-indigo-200', 'py-3')
    
    document.getElementById('withdraw-list').appendChild(li)
    
})