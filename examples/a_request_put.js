var tohttp = require('../index');

tohttp.put('http://example.com', {
	email: 'mail@mail.com',
	pass: '123123'
}, function(result) {
	console.log(result);
});
