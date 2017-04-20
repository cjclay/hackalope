var GitHubStrategy = require('passport-github2').Strategy;
var users = require('../../db/controllers/user.js');

module.exports = function (passport) {
  passport.use('github', new GitHubStrategy({
    clientID: "e71066ab5f16e9b0f7d1",
    clientSecret: "6793f3f23fbe27582cfcb12f18e092cb3996d5ea",
    callbackURL: "http://localhost:1337/auth/github/callback",
  },

  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      users.findUserByUsername(profile.username)
        .then(user => {
          if (!user) {
            // add the user to the database
            var githubUser = {
              name: profile.displayName,
              username: profile.username,
              avatar: profile._json.avatar_url,
              admin: false
            }
            users.insertUser(githubUser)
              .then(newUser => {
                return done(null, newUser);
              })
              .catch(err => {
                console.error(err);
              })
          } else {
            // log the user in with their github username
            return done(null, user)
          }
        })
        .catch(function (err) {
          console.log('Error signing up!')
          done(err);
      });
    })
  }
));

}
