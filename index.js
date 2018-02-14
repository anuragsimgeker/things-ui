var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var passport = require('passport');
var SmartThingsStrategy = require('passport-smartthings').Strategy;
var session = require('express-session');
var SQLiteStore = require('connect-sqlite3')(session);
var cookieParser = require('cookie-parser');
var config = require('./config');
var authMiddleware = require('./middleware/auth');
var smartthings = require('./routes/smartthings');
var api = require('./routes/api');
var path = require('path');
var bodyParser = require('body-parser');
var sessionStore = new SQLiteStore({ db: 'sessionsDB', table: 'sessions', dir: '.'});
var sessionMiddleware = session({ store: sessionStore, secret: 'session_top_secret', resave: false, saveUninitialized: false, cookie: { expires: new Date('03-01-2028') } });

var request = require('request-promise-native');

passport.use(new SmartThingsStrategy({
  clientID: config.SMARTTHINGS_CLIENT_ID,
  clientSecret: config.SMARTTHINGS_CLIENT_SECRET,
  callbackURL: config.SMARTTHINGS_CALLBACK_URL
}));

passport.serializeUser(function(user, done) { done(null, user); });
passport.deserializeUser(function(user, done) { done(null, user); });

io.use(function(socket, next) {
  sessionMiddleware(socket.request, socket.request.res, next);
});

app.use(cookieParser('cookie_top_secret'));
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'client/dist')))

app.use(function(req, res, next) {
  req.io = io;
  next();
});

// Public routes
app.get('/auth/smartthings', smartthings.index);
app.get('/auth/smartthings/callback', smartthings.callback);

// SmartThings routes
app.post('/smartthings/event', smartthings.event);

// Protected routes
app.get('/api/things', authMiddleware.authenticated, api.getThings);
app.put('/api/switches/:id', authMiddleware.authenticated, api.updateSwitch);
app.put('/api/locks/:id', authMiddleware.authenticated, api.updateLock);
app.put('/api/alertSystem', authMiddleware.authenticated, api.updateAlarmSystem);
app.get('/logout', authMiddleware.authenticated, function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

io.on('connection', function (socket) {
  if (socket.request.session.passport && socket.request.session.passport.user) {
    var user = socket.request.session.passport.user,
      url = user.endpoints[0].uri,
      locationId = user.endpoints[0].location.id,
      sockets = Object.values(io.sockets.connected) || [],
      token = user.accessToken;

    // Cache the socket ID
    socket.locationId = locationId;

    // Subscribe
    if (sockets.length === 1) {
      request.put(url + '/events/subscribe').auth(null, null, true, token).catch(console.error);
    }
  }

  socket.on('disconnect', function() {
    if (socket.request.session.passport && socket.request.session.passport.user) {
      var user = socket.request.session.passport.user,
      url = user.endpoints[0].uri,
      sockets = Object.values(io.sockets.connected) || [],
      token = user.accessToken;

      // Unsubscribe
      if (!sockets.length) {
        request.put(url + '/events/unsubscribe').auth(null, null, true, token).catch(console.error);
      }
    }
  });
});

module.exports = app;

http.listen(3000, function(){
  console.log('App running on port 3000');
});
