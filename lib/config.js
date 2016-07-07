var local = 'http://localhost:3000'; //Only test
var remote = 'https://tohttp.herokuapp.com';

module.exports = {
  url: remote.concat('/api?url='),
  url_test: local.concat('/api?url='),
  ping: remote.concat('/api?url='),
  ping_test: local.concat('/api?url=')
};
