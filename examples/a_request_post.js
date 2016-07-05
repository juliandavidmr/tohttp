var tohttp = require('../index');

tohttp.post('http://example.com', {
	email: 'mail@mail.com'
}, function(result) {
	console.log(result);
});
