var Profile = require('../models/profile');

module.exports = {
  createUserProfile,
  getProfile,
  create,
  deleteProfile,
  new: newProfile,
  show
};

async function createUserProfile(req, res, next) {
  console.log('user: ', req.user)
  try {
    await Profile.create(req.body);
    // Use the highScores action to return the list
    profile(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function getProfile(req, res) {
  if (user)
  var profile = await Profile.find({})
    .sort({ name: 1, email: 1 })
  console.log(profile);  
  res.json(profile);
}

function newProfile(req, res) {
  res.render('api/profile/new', { title: 'Profile' });
}

function create(req, res) {
  var profile = new Profile(req.body);
  profile.save(function (err) {
    //handle errors
    if (err) return res.render('/api/profile/new');
    res.redirect(`/api/profile/${profile._id}`);
  });
}

function deleteProfile(req, res) {
  Profile.deleteOne({ '_id': req.params.id }, function (err) {
    res.redirect('/api/profile');
  });
}

function show(req, res) {
  Profile.findById(req.params.id, function (err, flight) {
    // Ticket.find({}).where('_id').nin(flight.ticket)
    Activity.find({ flight: req.params.id }, function (err, activity) {
      Job.find({job: req.params.id}, function(err, job) {
        console.log(job);
        res.render('profile/show', {
          title: 'Profile Detail', profile, activity, job
        });
      })
    });
  });
} 