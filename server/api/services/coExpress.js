module.exports = function(gen) {
  return function(req, res, next) {
    return co.wrap(gen).apply(null, arguments).catch(function(err) {
      if (res.headersSent) return;
      return next(err);
    });
  };
}