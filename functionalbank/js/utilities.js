
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';

    return inputFieldValue;

    
}
function getElementValueById(elementId){
    const textelement = document.getElementById(elementId);
    const elementValueString = textelement.innerText;
    const textElementvalue = parseFloat(elementValueString);
    return textElementvalue;
}

function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}