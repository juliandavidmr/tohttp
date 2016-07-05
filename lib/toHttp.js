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
    callback(response.getBody());
  });
}

exports.post = function(url, callback) {
  requestify.get(config.url + url).then(function(response) {
    callback(response.getBody());
  });
}
