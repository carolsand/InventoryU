const User = require('../models/user');
const jwt = require('jsonwebtoken');
const Profile = require('../models/profile');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

async function signup(req, res) {
  const user = new User(req.body);
  console.log("This is the SignUP function after instantiating User ---->", user);
  const profile = new Profile({user: user._id, city:'', state:'', country:'' });
  try {
    user.profile = profile;
    await user.save();
    await profile.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log("This is the user in login -----> ", user)
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: '24h' }
  );
}