const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// consructor function
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb){
   // A user has logged in with OAuth
   Student.findOne({googleId: profile, function(err, student) {
     if(err) return cb(err);
     if(student) {
       return cb(null, student);
     } else {
       // We have a first-time user via OAuth!
       var newStudent = new Student({
         name: profile.displayName,
         email: profile.emails[0].value, //obtaining main email address
         googleId: profile.id
       });
       newStudent.save(function(err) {
         if (err) return cb(err);
         return cb(null, newStudent);
       });
     }
   }});
  }
));

// done is another popular term in a callback funcrion to let the function know it's done
passport.serializeUser(function(student, done){
  done(null, student.id);
});

passport.deserializeUser(function(id, done){
  Student.findById({id, function(err, student) {
    done(err, student);
  }})
});