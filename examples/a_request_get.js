var tohttp = require('../index');

tohttp.get('http//example.com', function (result) {
  console.log(result);
});

tohttp.get('http://www.google.com.co', function (result) {
  console.log(result);
});
