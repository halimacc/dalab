/* this policy was used to verify is there an token in request header or cookies

  INPUT: req.cookies.dalabApiKey;
  OUTPUT:
    redrecit: invalid,
    set req.body.dalabUser: valid

*/
module.exports = coExpress(function*(req, res, next) {
  var token = req.cookies.da_token || req.headers && req.headers.token;
  var apiKey = yield ApiKey.findOne({
    token: token
  }).populate('user');
  if (!apiKey || Date.now() - apiKey.createdAt > 7 * 24 * 3600 * 1000)
    return res.status(401).send();
  req.body = req.body || {};
  req.body.dalabUser = apiKey.user;
  next();
});