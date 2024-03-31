// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./database');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/signup', async (req, res) => {
  try {
    const { name, email, medicationSchedule } = req.body;
    const user = new User({ name, email, medicationSchedule });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
