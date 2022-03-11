// var buttonPlus = document.getElementById("button-plus");
// var buttonMinus = document.getElementById("button-minus");
// var buttonMultiply = document.getElementById("button-multiply");
// var buttonDevide = document.getElementById("button-devide");
var operationButtons = document.getElementsByClassName("operation-buttons");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
// var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value); 
    if (operationCode==="+") {
        var result = number1 + number2;
    }
    else if (operationCode==="-") {
        var result = number1 - number2;
    }
    else if (operationCode==="*") {
        var result = number1 * number2;
    }
    else if (operationCode==="/") {
        var result = number1 /  number2;
    }
    window.alert(result);
}
function onOperationButtonClick (e) {
    var clickedElement = e.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation); 
}
for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons [i];
    button.addEventListener("click", onOperationButtonClick);
}