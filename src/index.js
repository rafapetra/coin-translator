// User Interface Logic 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



  function getCurrency(currency) {
    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then((response) => response.json())
    .then(console.log);
    }

    getCurrency();