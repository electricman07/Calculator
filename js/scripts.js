const ac = document.querySelector(".btn-ac");
const bracketl = document.querySelector(".btn-bracketl");
const bracketr = document.querySelector(".btn-bracketr");
const zero = document.querySelector(".btn-0");
const period = document.querySelector(".btn-period");
const backspace = document.querySelector(".btn-backspace");
const equals = document.querySelector(".btn-equals");

const division = document.querySelector(".btn-division");
const multiply = document.querySelector(".btn-multiply");
const subtract = document.querySelector(".btn-subtract");
const plus = document.querySelector(".btn-plus");

const one = document.querySelector(".btn-1");
const two = document.querySelector(".btn-2");
const three = document.querySelector(".btn-3");
const four = document.querySelector(".btn-4");
const five = document.querySelector(".btn-5");
const six = document.querySelector(".btn-6");
const seven = document.querySelector(".btn-7");
const eight = document.querySelector(".btn-8");
const nine = document.querySelector(".btn-9");

const outputUpper = document.querySelector(".upper");
const outputLower = document.querySelector(".lower");

function pressNum(e) {
  let event = e.target.id;
  if (outputLower.innerHTML === "0") {
    outputLower.innerHTML = event;
  } else {
    outputLower.innerHTML += event;
  }
}

function pressAllClear() {
  outputUpper.innerHTML = "";
  outputLower.innerHTML = "0";
}

function pressClear() {
  outputLower.innerHTML = outputLower.innerHTML.slice(0, -1);
}

function pressEqual() {
  let exp = outputLower.innerHTML;
  outputUpper.innerHTML = exp;
  exp = exp.replace(/×/g, "*").replace(/÷/g, "/");
  let result;
  try {
    result = eval(exp);
    // if decimal number more than 4 decimal places
    if (result.toString().indexOf(".") !== -1) {
      result = result.toFixed(4);
    }
  } catch (e) {
    result = "Error";
  }

  outputLower.innerHTML = result;
}

function pressOperator(e) {
  // check last operator

  let event = e.target.innerHTML;

  let lastOperator = outputLower.innerHTML.slice(-1);
  if (
    lastOperator === "+" ||
    lastOperator === "-" ||
    lastOperator === "×" ||
    lastOperator === "÷"
  ) {
    output.innerHTML = outputLower.innerHTML.slice(0, -1) + event;
  } else {
    outputLower.innerHTML += event;
  }
}

function pressPeriod() {
  outputLower.innerHTML += ".";
}

function pressBracket(e) {
  let event = e.target.innerHTML;
  outputLower.innerHTML += event;
}

one.addEventListener("click", pressNum);
two.addEventListener("click", pressNum);
three.addEventListener("click", pressNum);
four.addEventListener("click", pressNum);
five.addEventListener("click", pressNum);
six.addEventListener("click", pressNum);
seven.addEventListener("click", pressNum);
eight.addEventListener("click", pressNum);
nine.addEventListener("click", pressNum);
zero.addEventListener("click", pressNum);
ac.addEventListener("click", pressAllClear);
backspace.addEventListener("click", pressClear);
bracketl.addEventListener("click", pressBracket);
bracketr.addEventListener("click", pressBracket);
period.addEventListener("click", pressPeriod);
equals.addEventListener("click", pressEqual);
division.addEventListener("click", pressOperator);
multiply.addEventListener("click", pressOperator);
plus.addEventListener("click", pressOperator);
subtract.addEventListener("click", pressOperator);
