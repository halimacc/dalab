/* this policy was used to verify is the operating user admin
 */
module.exports = coExpress(function*(req, res) {
  var user = req.body && req.body.dalabUser;
  if (!user || !user.isAdmin)
    return res.status(401).json({
      message: 'not admin'
    });
  next();
});