function getInputValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputBalanceString = inputField.value;
    const inputBalance = parseInt(inputBalanceString);
    return inputBalance;

}

function setValueElementById(elementID, value) {
    const elementField = document.getElementById(elementID);
    elementField.innerText = value;
}


document.getElementById('calculateBtn').addEventListener('click', function () {
    const foodExpanse = getInputValueById('food-field');
    const rentExpanse = getInputValueById('rent-field');
    const clothesExpanse = getInputValueById('cloth-field');
    const incomeBalance = getInputValueById('income-field');
    if (foodExpanse < 0 || rentExpanse < 0 || clothesExpanse < 0 || incomeBalance < 0) {
        alert('please enter positive number')
        return
    }
    if (isNaN(foodExpanse) || isNaN(rentExpanse) || isNaN(clothesExpanse) || isNaN(incomeBalance)) {
        alert('please enter a number')
        return
    }

    const totalExpanse = foodExpanse + rentExpanse + clothesExpanse;

    if(totalExpanse > incomeBalance){
        alert('Cannot spend more than income');
        return;
    }
    setValueElementById('total-expanse', totalExpanse)

    const totalBalance = incomeBalance - totalExpanse;

    setValueElementById('total-balance', totalBalance)

})

document.getElementById('savingBtn').addEventListener('click', function () {
    const incomeBalance = getInputValueById('income-field');
    const taxValue = getInputValueById('tax-field');
    if(taxValue>=100){
        alert(' It is not possible to save more than 100%');
        return;
    }
    if (taxValue < 0) {
        alert('please enter positive number');
        return
    }
    if (isNaN(taxValue)) {
        alert('please enter a number');
        return
    }
    const tax = taxValue / 100;
    const savingAmount = incomeBalance * tax;

    if(savingAmount>incomeBalance){
        alert('You cannot save more than your balance.');
        return;
    }
    setValueElementById('saving-total', savingAmount)

    const BalanceTotalField = document.getElementById('total-balance');
    const balanceTotalString = BalanceTotalField.innerText;
    const balanceTotal = parseInt(balanceTotalString);
    const remainBalance = balanceTotal - savingAmount;
    setValueElementById('remainingBalance', remainBalance)
    console.log(tax)
})
// document.getElementById('savingBtn').addEventListener('click', function () {
//     const incomeBalance = getInputValueById('income-field');
//     const taxValue = getInputValueById('tax-field');
//     const tax = taxValue / 100;
//     const savingAmount = incomeBalance * tax;
//     setValueElementById('saving-total', savingAmount)

//     const
//     const totalExpanse = getExpanseValue();
//     const BalanceTotal = totalBalance(totalExpanse);
//     const remainBalance = BalanceTotal - savingAmount;
//     setValueElementById('remainingBalance', remainBalance)
//     console.log(tax)
// })