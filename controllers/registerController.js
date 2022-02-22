const Teacher = require('../models/Teacher');
const bcrypt = require('bcrypt');

const handleNewTeacher = async (req, res) => {
  const { name, email, password } = req.body;
  let teacher = await Teacher.findOne({ email });
  if (teacher) {
    return res.status(400).json({ msg: `User already exists for ${email}` });
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

module.exports = { handleNewTeacher };
