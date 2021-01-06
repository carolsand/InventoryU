const Profile = require('../../models/profile');

module.exports = {
  index,
  show,
  create,
  delete: deleteProfile,
  update
};

/* Index profile for the logged in user */
async function index(req, res) {
  const profile = await Profile.find({});
  res.status(200).json(profile);
}

/* Create profile for the logged in user */
async function create(req, res) {
  const profile = await Profile.create(req.body);
  res.status(201).json(profile);
}

/* Show profile for the logged in user */
async function show(req, res) {
  const profile = await Profile.findbyId(req.params.id);
  console.log(profile);  
  res.status(200).json(profile);
}

/* Delete a new profile for the logged in user */
async function deleteProfile(req, res) {
  const deletedProfile = await Profile.findByIdAndRemove(req.params.id);
  res.status(200),json(deletedProfile);
}

async function update(req, res) {
  const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200),json(updatedProfile);
}
