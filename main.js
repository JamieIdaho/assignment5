var calculate = document.querySelector("#calculateBtn");


function add() {
  var numOne = document.querySelector("#num_one").value;
  var numTwo = document.querySelector("#num_two").value;
  var chosenNum1 = Number(numOne);
  var chosenNum2 = Number(numTwo);
  var answer = chosenNum1 + chosenNum2;
  document.querySelector("#answer").textContent = answer;
}


calculate.addEventListener("click", add);
