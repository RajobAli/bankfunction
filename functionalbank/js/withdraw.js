

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total',newWithdrawTotal);

    const previousBalenceTotal = getElementValueById('balence-total');
    const newBalenceTotal = previousBalenceTotal - newWithdrawAmount;
    setTextElementValueById('balence-total',newBalenceTotal);




    
});