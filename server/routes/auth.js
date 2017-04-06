var express = require('express');
var router = express.Router();

// handle login request

module.exports = function (passport) {

  router.get('/', function(req, res, next) {
    res.json(req.user.username);
  });

  router.post('/login', passport.authenticate('login'),
  function (req, res, next) {
    res.sendStatus(201);
  });

  // handle new user signup
  router.post('/signup', passport.authenticate('signup'),
  function (req, res, next){
    var userData = {name: req.user.name,
                    username: req.user.username,
                    admin: req.user.admin,
                    _id: req.user._id,
                    favorites: req.user.favorites};

   res.status(201).send(userData);
  });

  // handle logout
  router.post('/logout', function (req, res, next) {
    req.logout();
    res.sendStatus(200);
  });

  return router;
};
