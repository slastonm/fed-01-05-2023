import { module } from "./module";
const axios = require("axios");

module();

axios.get('https://swapi.dev/api/planets/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });