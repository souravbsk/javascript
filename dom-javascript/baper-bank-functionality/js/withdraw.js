document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdrawValue = getInputFieldValueById('withdraw-field');
    if(isNaN(newWithdrawValue)){
        alert('please enter a valid amount');
        return;
    }
   
    const previousValue = getElementValueById('withdraw-total');
    const newWithdrawBalance = previousValue + newWithdrawValue;
    const balanceTotal = getElementValueById('balance-total');

    if(balanceTotal<newWithdrawValue){
        alert('limit cross kor6is');
        return
    }
    setElementValueBtId('withdraw-total',newWithdrawBalance);

    
    const currentBalance  = balanceTotal - newWithdrawValue;

    setElementValueBtId('balance-total',currentBalance)
    templateSummaryList(newWithdrawValue,balanceTotal,currentBalance,false)

})