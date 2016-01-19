/**
 * ManagementController
 *
 * @description :: Server-side logic for managing Managements
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  default: coExpress(function*(req, res) {
    var management = {
      user: req.body.dalabUser
    };

    res.json(management);
  }),
};