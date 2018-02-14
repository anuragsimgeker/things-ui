exports.authenticated = function (req, res, next) {
  if (req.user) {
    return next();
  }
  res.status(401).send('Not Authorized');
}
