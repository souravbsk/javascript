document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    const depositAmountNumber = parseFloat(depositAmount);
    depositField.value ='';

    if(isNaN(depositAmountNumber)){
        alert('enter a valid amount');
        return;
    }


    const depositBalanceElement = document.getElementById('deposit-text');
    const depositBalance = depositBalanceElement.innerText;
    const depositBalanceNumber = parseFloat(depositBalance);

    const balanceTotalField = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalField.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalString);



    const totalDepositBalance = depositBalanceNumber + depositAmountNumber;
    depositBalanceElement.innerText = totalDepositBalance; 

    // update total balance 
    const totalBalanceTotal = balanceTotalNumber + depositAmountNumber;
    balanceTotalField.innerText = totalBalanceTotal;

})



// withdraw 
document.getElementById("btn-withdraw").addEventListener('click',function(){
// get input field balance 
    const withdrawInputField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawInputField.value;
    const withdrawNumberValue = parseFloat(withdrawAmountString);
    withdrawInputField.value = '';

    if(isNaN(withdrawNumberValue)){
        alert('enter a valid amount');
        return;
    }

    // get withdraw text 
    const withdrawTextElement = document.getElementById('withdraw-text');
    const withdrawBalanceString = withdrawTextElement.innerText;
    const withdrawNumberBalance = parseFloat(withdrawBalanceString);

    //get total Balance
    const balanceTotalField = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalField.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalString);



    if( withdrawNumberValue > balanceTotalNumber){
        alert('limit cross kore6o')
        return;
    }


    const totalWithdrawBalance = withdrawNumberBalance + withdrawNumberValue ;
    withdrawTextElement.innerText = totalWithdrawBalance;

    const totalBalanceAmount = balanceTotalNumber - withdrawNumberValue;
    balanceTotalField.innerText = totalBalanceAmount 




})