/**
* Publication.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },

    year: {
      type: 'integer',
      required: true
    },

    authors: {
      type: 'string',
      required: true
    },

    publication: {
      type: 'string',
      required: true
    }
  }
};

