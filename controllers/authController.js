const Teacher = require('../models/Teacher');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }
    const match = await bcrypt.compare(password, teacher.password);
    if (!match) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }
    const payload = {
      teacher: {
        id: teacher._id,
      },
    };

    const accessToken = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '3000s',
    });
    const refreshToken = await jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    });

    payload.accessToken = accessToken;
    await Teacher.findByIdAndUpdate(
      payload.teacher.id,
      { refreshToken: refreshToken },
      { new: true }
    ).exec();

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json(payload);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { handleLogin };
