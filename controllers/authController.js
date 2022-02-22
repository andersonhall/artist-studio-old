const Teacher = require('../models/Teacher');
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }
    const match = bcrypt.compare(password, teacher.password);
    if (!match) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }
    const payload = {
      teacher: {
        id: teacher._id,
      },
    };
    res.json(payload);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { handleLogin };
