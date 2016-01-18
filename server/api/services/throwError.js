module.exports = function(res, error, message){
  throw res.status(400).json({
    error: error,
    message: message,
  });
};