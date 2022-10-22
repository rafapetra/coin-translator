// User Interface Logic
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Currency from "./app.js";

window.addEventListener("load", function () {
  const button = document.getElementById("submit");
  button.addEventListener("click", getCurrency);
});

function getCurrency() {
  Currency.getCurrency().then(function (data) {
    if (data.result != "success") {
      printError(data);
    } else {
      printElements(data);
    }
  });
}

function printElements(data) {
  const inputOne = document.getElementById("currency-one");
  const inputAmount = document.getElementById("amount-one");
  const resultDiv1 = document.getElementById("result1");
  const resultDiv2 = document.getElementById("result2");
  const equalSign = document.getElementById("equalSign");
  const userInput = inputOne.value;
  const amount = inputAmount.value;
  const rate = data.conversion_rates[userInput];
  resultDiv1.innerText = `${amount} USD`;
  equalSign.innerText = `=`;
  resultDiv2.style.display = "block";
  resultDiv2.innerText = `${amount * rate} ${userInput}`;
}

function printError(error) {
  const inputOne = document.getElementById("currency-one").value;
  const resultDiv1 = document.getElementById("result1");
  resultDiv1.innerText = `There was an error accessing the currency data for ${inputOne}: ${error}`;
}
