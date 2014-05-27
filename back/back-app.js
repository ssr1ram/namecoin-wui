var synth = require('synth');
var config = require('./config.json');

synth.app.use(function (req, res, next) {
  req.appName = "Namecoin WUI"
  req.config = config;
  next();
});

/* Init and return synth app */
module.exports = synth();
