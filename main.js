var addButton = document.querySelector("#addBtn");
var subtractButton = document.querySelector("#subtractBtn");
var multiplyButton = document.querySelector("#multiplyBtn");
var divideButton = document.querySelector("#divideBtn");



function add() {
  var numOne = document.querySelector("#num_one").value;
  var numTwo = document.querySelector("#num_two").value;
  var chosenNum1 = Number(numOne);
  var chosenNum2 = Number(numTwo);
  var answer = chosenNum1 + chosenNum2;
  document.querySelector("#answer").textContent = answer;
}

function subtract() {
  var numOne = document.querySelector("#num_one").value;
  var numTwo = document.querySelector("#num_two").value;
  var chosenNum1 = Number(numOne);
  var chosenNum2 = Number(numTwo);
  var answer = chosenNum1 - chosenNum2;
  document.querySelector("#answer").textContent = answer;
}

function multiply() {
  var numOne = document.querySelector("#num_one").value;
  var numTwo = document.querySelector("#num_two").value;
  var chosenNum1 = Number(numOne);
  var chosenNum2 = Number(numTwo);
  var answer = chosenNum1 * chosenNum2;
  document.querySelector("#answer").textContent = answer;
}

function divide() {
  var numOne = document.querySelector("#num_one").value;
  var numTwo = document.querySelector("#num_two").value;
  var chosenNum1 = Number(numOne);
  var chosenNum2 = Number(numTwo);
  var answer = chosenNum1 / chosenNum2;
  document.querySelector("#answer").textContent = answer;
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);

