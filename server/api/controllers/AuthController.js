/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var crypto = bluebird.promisifyAll(require('crypto'));
var bcrypt = bluebird.promisifyAll(require('bcryptjs'));

module.exports = {
  getKey: coExpress(function*(req, res) {
    req.body = req.body || {};
    var fields = ['telephone', 'loginPassword', 'role'];
    for (index in fields) {
      if (!req.body[fields[index]])
        throwError(res, 'Auth', 'Field ' + fields[index] + ' is required');
    }
    var user = yield User.findOne({
      telephone: req.body.telephone,
      role: req.body.role,
    });

    if (!user) {
      throwError(res, 'Auth', 'User does not exist');
    } else if (yield bcrypt.compareAsync(req.body.loginPassword, user.loginPassword)) {
      var buf = yield crypto.randomBytesAsync(32);
      var apikey = buf.toString('base64');
      yield APIKey.create({
        user: user,
        apikey: apikey
      });

      //Update avd signature
      yield user.updateQavSignature();

      return res.json({
        apikey: apikey
      });
    } else {
      throwError(res, 'Auth', 'Field loginPassword mismatch');
    }
  }),

  revokeKey: coExpress(function*(req, res) {
    req.body = req.body || {};
    if (!req.body.apikey) {
      throwError(res, 'Auth', 'User is not authorized');
    } else {
      var item = yield APIKey.findOne({
        apikey: req.body.apikey
      });
      if (!item) {
        throwError(res, 'Auth', 'The apikey does not exist');
      } else {
        yield item.destroy();
        return res.json({
          status: 'The apikey is revoked'
        });
      }
    }
  }),

  currentUser: coExpress(function*(req, res) {
    res.json(req.user);
  }),
};