var synth = require('synth');

synth.app.use(function (req, res, next) {
  req.appName = "Namecoin WUI"
  next();
});

/* Init and return synth app */
module.exports = synth();
