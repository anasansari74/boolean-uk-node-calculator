operators = ["plus", "minus", "times", "divided"];

const input = process.argv.slice(2);

const numOne = Number(input[0]);
const operator = input[1];
const numTwo = Number(input[2]);

if (isNaN(numOne) || isNaN(numTwo) || !operators.includes(operator)) {
  console.error("Wrong Inputs!");
  return null;
}

function calculator(numberOne, operator, numberTwo) {
  let result = null;

  if (operator === "plus") {
    result = numberOne + numberTwo;
  } else if (operator === "minus") {
    result = numberOne - numberTwo;
  } else if (operator === "times") {
    result = numberOne * numberTwo;
  } else if (operator === "divided") {
    result = numberOne / numberTwo;
  }
  return result;
}

console.log("your result is:", calculator(numOne, operator, numTwo));
