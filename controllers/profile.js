var Profile = require('../models/profile');
const profile = require('../models/profile');

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

/* This function renders nothing and is unnecessary */
function newProfile(req, res) {
  res.render('api/profile/new', { title: 'Profile' });
}

/* Create a new profile for the logged in user */
function create(req, res) {
  var profile = new Profile(req.body);
  profile.save(function (err) {
    //handle errors
    if (err) return res.render('/api/profile/new');
    res.redirect(`/api/profile/${profile._id}`);
  });
}

/* Delete the logged in users profile */
function deleteProfile(req, res) {
  Profile.deleteOne({ '_id': req.params.id }, function (err) {
    res.redirect('/api/profile');
  });
}

function show(req, res) {
  Profile.findById(req.params.id, function (err, profile) {
    // Profile.find({}).where('_id').nin(inventory.rooms)
    Inventory.find({ invetory: req.params.id }, function (err, activity) {
      Room.find({room: req.params.id}, function(err, job) {
        console.log(profile);
        res.render('profile/show', {
          title: 'Profile Detail', profile
        });
      })
    });
  });
} 