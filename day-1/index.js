const os =require ("os")
const math = require("./math");
const cors = require("cors");

const prompt = require("prompt-sync")();
calculator();

function calculator() {
  let num1 = prompt("Enter your first numbers ");
  num1 = parseInt(num1);
  let num2 = prompt("Enter your second numbers ");
  num2 = parseInt(num2);
  let calType = prompt("what type is your calc?");

  switch (calType) {
    case "+":
      console.log(math.sum(num1, num2));
      break;

    case "*":
      console.log(math.mul(num1, num2));
      break;

    case "/":
      console.log(math.div(num1, num2));
      break;

    case "-":
      console.log(math.sub(num1, num2));
      break;

    default:
      break;
  }

  let repeat = prompt("do you want another calculation ?  press (1)");

  if (repeat != "1") {
    console.log("have a nice day");
  } else if (repeat == "1") {
    calculator();
  }
}
