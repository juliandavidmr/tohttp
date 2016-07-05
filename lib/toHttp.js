var requestify = require('requestify');
var config = require('./config');

/**
 * [function description]
 * @param  {[type]}   url      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [result of request]
 */
exports.get = function(url, callback) {
  requestify.get(config.url + url).then(function(response) {
    callback(response);
  });
}

exports.post = function(url, params, callback) {
  requestify.post(config.url + url, params).then(function(response) {
    callback(response);
  });
}

exports.put = function(url, params, callback) {
  requestify.put(config.url + url, params).then(function(response) {
    callback(response);
  });
}

exports.delete = function(url, callback) {
  requestify.delete(config.url + url).then(function(response) {
    callback(response);
  });
}

exports.head = function(url, callback) {
  requestify.head(url).then(function(response) {
      // Get the response code
      //response.getCode();
      callback(response);
  });
}
