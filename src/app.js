export default class Currency {
  static getCurrency() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(function(data) {
      if (data.status != 200) {
        const errorMessage = `${data.status} ${data.statusText}`;
        throw new Error(errorMessage);
  

      } else {
        console.log(data)
        return data.json();

      }
    })      
    .catch(function(error) {
      return error;
    });
  }
}