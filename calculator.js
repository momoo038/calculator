let number1 = 0;
let number2 = 0;
let operator;
let errorDisplayed = false;
let operatorEntered = false;

let add = function (a, b) {
  return a + b;
};

let subtract = function (a, b) {
  return a - b;
};

let multiply = function (a, b) {
  return a * b;
};

let divide = function (a, b) {
  return a / b;
};

let display = document.querySelector("#display");
display.value = "";

let operate = function (operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

let appendToDisplay = function (input) {
  if (errorDisplayed) {
    display.value = "";
    display.style = "text-align: right";
    errorDisplayed = false;
  }

  const isOperator = ["+", "-", "*", "/"].includes(input);

  if (isOperator && display.value === "") {
    return;
  }

  if (isOperator && operatorEntered) {
    return;
  }

  if (isOperator) {
    operatorEntered = true;
    operator = input;
  }

  display.value = display.value + input;
  display.style = "text-align: right";
};

let clearDisplay = function () {
  display.value = "";
  operatorEntered = false;
};

let calculate = function () {
  let strToNum = display.value.split(operator);
  if (strToNum.length !== 2) {
    return;
  }
  const [num1, num2] = strToNum.map(Number);
  if (operator == "/" && num2 == 0) {
    display.style = "font-size: 2.25rem; color: red; text-align: center;";
    display.value = "Error: Division by zero";
    errorDisplayed = true;
    return;
  }
  display.value = operate(operator, num1, num2);
  operatorEntered = false;
};
