
document.getElementById('deposit-btn').addEventListener('click',function(){
    const newDepositValue = getInputFieldValueById('deposit-field');
    if(isNaN(newDepositValue)){
        alert('please enter a valid amount');
        return;
    }
    const previousDepositVlaue = getElementValueById('deposit-total');

    const totalDepositValue = previousDepositVlaue + newDepositValue;
     setElementValueBtId("deposit-total",totalDepositValue)

     const balanceTotal = getElementValueById('balance-total');
     const currentBalance = balanceTotal + newDepositValue;

     setElementValueBtId('balance-total', currentBalance)

     templateSummaryList(newDepositValue,balanceTotal,currentBalance,true)
})