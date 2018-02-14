var passport = require('passport');

exports.index = passport.authenticate('smartthings', { scope: ['app'] });

exports.callback = passport.authenticate('smartthings', { successRedirect: '/', failureRedirect: '/auth/smartthings' });

exports.event = function (req, res) {
  var sockets = Object.values(req.io.sockets.connected) || [];
  sockets.forEach(function (socket) {
    if (socket.locationId === req.body.locationId) {
      socket.emit('new event', req.body);
    }
  });
  res.status(204).send();
};
