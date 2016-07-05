var requestify = require('requestify');
var validUrl = require('valid-url');
var config = require('./config');

exports.get = function(url, callback) {
	if (validUrl.isUri(url)) {
		requestify.get(config.url + url).then(function(response) {
			callback(response.getBody());
		});
	} else {
		callback({
			error: "URL ".concat(url).concat(" is invalid.")
		});
	}
}

exports.post = function(url, params, callback) {
	if (validUrl.isUri(url)) {
		requestify.post(config.url + url, params).then(function(response) {
			callback(response.getBody());
		});
	} else {
		callback({
			error: "URL ".concat(url).concat(" is invalid.")
		});
	}
}

exports.put = function(url, params, callback) {
	if (validUrl.isUri(url)) {
		requestify.put(config.url + url, params).then(function(response) {
			callback(response.getBody());
		});
	} else {
		callback({
			error: "URL ".concat(url).concat(" is invalid.")
		});
	}
}

exports.delete = function(url, callback) {
	if (validUrl.isUri(url)) {
		requestify.delete(config.url + url).then(function(response) {
			callback(response.getBody());
		});
	} else {
		callback({
			error: "URL ".concat(url).concat(" is invalid.")
		});
	}
}

exports.head = function(url, callback) {
	if (validUrl.isUri(url)) {
		requestify.head(url).then(function(response) {
			callback(response.getBody());
		});
	} else {
		callback({
			error: "URL ".concat(url).concat(" is invalid.")
		});
	}
}
