const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConfig');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/register', require('./routes/register'));
app.use('/api/login', require('./routes/login'));

connectDB();
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
