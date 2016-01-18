/* this policy was used to verify is there an token in request header or cookies

  INPUT: req.cookies.dalabApiKey;
  OUTPUT:
    redrecit: invalid,
    set req.body.dalabUser: valid

*/
module.exports = coExpress(function*(req, res) {
  var token = req.cookies.dalabApiKey;
  var apiKey = yield ApiKey.findOne({
    token: token
  });
  if (!apiKey || Date.now() - apiKey.createdAt > 7 * 24 * 3600 * 1000)
    return res.redirect('/login');
  req.body = req.body || {};
  req.body.dalabUser = user;
  next();
});