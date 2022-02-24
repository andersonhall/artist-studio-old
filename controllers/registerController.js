const Teacher = require('../models/Teacher');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleNewTeacher = async (req, res) => {
  const { name, email, password } = req.body;
  let teacher = await Teacher.findOne({ email }).exec();
  if (teacher) {
    return res.status(409).json({ msg: `User already exists for ${email}` });
  }
  try {
    teacher = new Teacher({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    teacher.password = await bcrypt.hash(password, salt);

    await teacher.save();
    res.json('success');
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports = { handleNewTeacher };
