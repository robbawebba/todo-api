var router = require('express').Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

router.post('/signup', function(req, res, next) {
  console.log(req.body)
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please provide a username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err, post) {
      if (err) {
        return next(err);
      }
      res.json(post);
    });
  }
});

module.exports = router;
