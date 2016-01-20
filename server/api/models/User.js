/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var bcrypt = bluebird.promisifyAll(require('bcryptjs'));

var setHash = co.wrap(function*(values, prop) {
  if (!values[prop]) return;
  var hash = yield bcrypt.hashAsync(values[prop], 7);
  values[prop] = hash;
});

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true,
      minLength: 6
    },

    name: {
      type: 'string',
      required: true
    },

    role: {
      enum: ['Faculty', 'Student', 'Alumana/Alumanus'],
      required: true
    },

    title: {
      type: 'string'
    },

    homepage: {
      type: 'string'
    },

    email: {
      type: 'string'
    },

    telephone: {
      type: 'string'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  beforeCreate: function(values, next) {
    return bluebird.resolve(
      setHash(values, 'password')
    ).nodeify(next);
  }
};