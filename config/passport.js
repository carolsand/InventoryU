const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

// consructor function refer to passport docs for accssToken, refreshToken
passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
        // A user has logged in with OAuth
        User.findOne({ googleId: profile.id },
            function(err, user) {
                if (err) return cb(err);
                if (user) {
                    return cb(null, user);
                } else {
                    // We have a first-time user via OAuth!
                    const newUser = new User({
                        name: profile.displayName,
                        email: profile.emails[0].value, //obtaining main email address .valuee is the actual email
                        googleId: profile.id
                    });
                    newUser.save(function(err) {
                        if (err) return cb(err);
                        return cb(null, newUser);
                    });
                }
            }
        );
    }
));

// done is another popular term in a callback funcrion to let the function know it's done
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});