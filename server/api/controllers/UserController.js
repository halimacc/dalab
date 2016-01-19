/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var crypto = bluebird.promisifyAll(require('crypto'));
var bcrypt = bluebird.promisifyAll(require('bcryptjs'));

var errLogin = "Login";
var errLogout = "Logout";

module.exports = {
  login: coExpress(function*(req, res) {
    req.body = req.body || {};
    var fields = ['username', 'password'];
    for (index in fields) {
      if (!req.body[fields[index]])
        throwError(res, errLogin, 'Field ' + fields[index] + ' is required');
    }

    var user = yield User.findOne({
      username: req.body.username
    });
    if (!user)
      throwError(res, errLogin, 'User does not exist')

    if (!(yield bcrypt.compareAsync(req.body.password, user.password)))
      throwError(res, errLogin, 'Password mismatch');

    var buf = yield crypto.randomBytesAsync(32);
    var token = buf.toString('base64');
    var apiKey = yield ApiKey.create({
      user: user,
      token: token
    });

    res.cookie('da_token', apiKey.token, {
      expires: new Date(Date.now() + 7 * 24 * 3600 * 1000)
    });
    return res.json({
      token: apiKey.token
    });
  }),

  logout: coExpress(function*(req, res) {
    var token = req.cookies.da_token || req.headers && req.headers.token;
    return res.json(yield ApiKey.destroy({
      token: token
    }));
  }),
};