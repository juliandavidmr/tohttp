var tohttp = require('../index');

tohttp.get('http//example.com', function (result) {
  console.log(result);
});
