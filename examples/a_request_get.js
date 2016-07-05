var tohttp = require('../index');

tohttp.get('http://45.55.50.95:1337/entrada', function (result) {
  console.log(result);
});
