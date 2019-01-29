var CASAuthentication = require('cas-authentication');

// Create a new instance of CASAuthentication.
var cas = new CASAuthentication({
  cas_url       : 'https://fed.princeton.edu/cas/',
  service_url   : 'http://localhost:3001',
  cas_version   : 'saml1.1',
  is_dev_mode   : true, // set to true during development
  dev_mode_user : 'tester',
});

module.exports = cas;
