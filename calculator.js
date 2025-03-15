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
display.value = "0123456789";

let number1 = 0;
let number2 = 0;
let operator;

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

let appendToDisplay = function (number) {
  display.value = display.value + number;
  display.style = "text-align: right";
  ("overflow: hidden");
};

let clearDisplay = function () {
  display.value = "";
};
