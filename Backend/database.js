const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('scottmaclennan30:3vOzUrrRiy18zM5i@strokeuser.wcotuni.mongodb.net/?retryWrites=true&w=majority&appName=StrokeUser', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
