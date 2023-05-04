// ---------- //
// -SHIV-UWU- //
// ---------- //

// code does not work raw, you need to add html buttons and some css to make it look good
// this is just the javascript code for the calculator

var operand1 = 0; // this is the first number
var operand2 = 0; // this is the second number
var operator = "";
var result = document.getElementById("result"); // this is the result

function digit(num) { // function for the numbers
  if (operator === "") { 
    operand1 = operand1 * 10 + num; 
    result.innerHTML = operand1; 
  } else {  // if the operator is not empty
    operand2 = operand2 * 10 + num;
    result.innerHTML = operand2; // display result
  }
}

function decimal() {  // function for the decimal
  if (operator === "" && String(operand1).indexOf(".") === -1) { // if the operator is empty and the first number does not have a decimal
    operand1 += ".";
    result.innerHTML = operand1;
  } else if (operator !== "" && String(operand2).indexOf(".") === -1) { // if the operator is not empty and the second number does not have a decimal
    operand2 += ".";
    result.innerHTML = operand2;
  }
}

function add() { // function for addition
  operator = "+";
}

function subtract() { // function for subtraction
  operator = "-";
}

function multiply() { // function for multiplication
  operator = "*";
}

function divide() { // function for division
  operator = "/";
}

function clear() {
  operand1 = 0;
  operand2 = 0;
  operator = "";
  result.innerHTML = "0";
}

function calculate() {
  var resultValue = 0;
  switch (operator) {
    case "+":
      resultValue = operand1 + operand2;
      break;
    case "-":
      resultValue = operand1 - operand2;
      break;
    case "*":
      resultValue = operand1 * operand2;
      break;
      case "/":
      resultValue = operand1 / operand2;
      break;
      }
      operand1 = resultValue;
      operand2 = 0;
      operator = "";
      result.innerHTML = resultValue;
      }

