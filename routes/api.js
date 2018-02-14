var request = require('request-promise-native');

exports.getThings = function (req, res) {
  var user = req.session.passport.user,
    url = user.endpoints[0].uri,
    token = user.accessToken;

  request.get(url + '/things').auth(null, null, true, token)
    .then(function (things) {
      res.send(things);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
};

exports.updateSwitch = function (req, res) {
  var user = req.session.passport.user,
    url = user.endpoints[0].uri,
    token = user.accessToken,
    switchId = req.params.id,
    switchCommand = req.body.command,
    switchLevel = req.body.level;

  request.put(url + `/switches/${switchId}`).json({ command: switchCommand, level: switchLevel }).auth(null, null, true, token)
    .then(function (response) {
      res.send(response);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
};

exports.updateLock = function (req, res) {
  var user = req.session.passport.user,
    url = user.endpoints[0].uri,
    token = user.accessToken,
    lockId = req.params.id,
    lockCommand = req.body.command;

  request.put(url + `/locks/${lockId}`).json({ command: lockCommand }).auth(null, null, true, token)
    .then(function (response) {
      res.send(response);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
};

exports.updateAlarmSystem = function (req, res) {
  var user = req.session.passport.user,
    url = user.endpoints[0].uri,
    token = user.accessToken,
    alarmSystemCommand = req.body.command;

  request.put(url + `/alarmSystemStatus`).json({ command: alarmSystemCommand }).auth(null, null, true, token)
    .then(function (response) {
      res.send(response);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
}
