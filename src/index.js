// User Interface Logic 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './app.js';


const inputOne = document.getElementById('currency-one');
const inputAmount = document.getElementById('amount-one');
const resultDiv = document.getElementById('result');
const button = document.getElementById('submit');

  function getCurrency(currency) {
    const userInput = inputOne.value; 
    const amount = inputAmount.value;

      Currency.getCurrency(currency)
    .then((data) => {
      // console.log(data);
      const rate = data.conversion_rates[userInput];
      resultDiv.innerText = `1 usd = ${amount * rate}`
    });
    }


    button.addEventListener('click', getCurrency)


