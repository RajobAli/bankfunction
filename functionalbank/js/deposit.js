


document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getElementValueById('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueById('deposit-total',newDepositTotal);


    // get previous balence
    const previousBalenceTotal = getElementValueById('balence-total');
    const newBalenceTotal = previousBalenceTotal + newDepositAmount;
    setTextElementValueById('balence-total',newBalenceTotal)

  
    
});