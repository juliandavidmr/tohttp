var tohttp = require('../index');

tohttp.put('http://45.55.50.95:1337/entrada', {
	email: 'mail@mail.com',
	pass: '123123'
}, function(result) {
	console.log(result);
});
