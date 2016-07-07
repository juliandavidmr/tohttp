![toHttp][logo]

[![npm version](https://badge.fury.io/js/showdown.svg)](http://badge.fury.io/js/showdown) [![Bower version](https://badge.fury.io/bo/showdown.svg)](http://badge.fury.io/bo/showdown)

-----
#### English
__tohttp__ is a module for __HTTP__ requests from __HTTPS__, either from the client side (in the browser) or server side (with nodejs).

Also it works for __anonymous requests__ because the requests are made by a remote server with https security.

__Your traffic is safe, nothing is stored on another server__

#### Español
__toHttp__ es un módulo para realizar peticiones __HTTP__ desde __HTTPS__, ya sea desde el lado del cliente (en el navegador) o del lado del servidor (con nodejs).

Tambien funciona para realizar __peticiones anonimas__, ya que las peticiones son efectuadas por un servidor remoto con seguridad https.

__Tu trafico es seguro, nada es almacenado en otro servidor.__

## Installation

### npm

    npm install tohttp --save

## Quick Example

### Node
```js
import tohttp from 'tohttp'; //ES6
//Or
var tohttp = require('tohttp'); //Node normal
```

```js
//GET
tohttp.get('http://www.example.com', function (result) { //Dir web, IP ...
  console.log(result);
});

//POST
tohttp.post('http://www.example.com', { //Dir web, IP ...
	email: 'mail@mail.com'
}, function(result) {
	console.log(result);
});

//PUT
tohttp.put('http://www.example.com', { //Dir web, IP ...
	email: 'mail@mail.com',
	pass: 'xxxxxx'
}, function(result) {
	console.log(result);
});
```

Also request HEAD and DELETE.

### Browser
Use RequireJS o WebPack.

### Example
Code in the server or browser:
```js
tohttp.get('http://example.com', function (result) {
  console.log(result);
});
```

Output in format JSON:
```js
{
  "code": 200,
  "headers":
   {
     "server": "Cowboy",
     "connection": "close",
     "x-powered-by": "Express",
     "content-type": "application/json; charset=utf-8",
     "content-length": 12185,
     "etag": "W/'2f99-476I792nSGQcjm7FwiGErg'",
     "date": "Tue, 05 Jul 2016 23:07:13 GMT",
     "via": "1.1 vegur"
   },
  "body": {
     //Here your code: html, json, text...
  }
```

## Credits
Full credit to ![anlijudavid]

[logo]: http://www.teenvio.com/es/wp-content/uploads/2012/07/http-https-explorer-8.gif
[anlijudavid]: http://www.twitter.com/anlijudavid
