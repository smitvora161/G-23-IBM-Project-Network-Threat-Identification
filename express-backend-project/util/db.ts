import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://patmanasvi03:IsxML50hT2aW4lNC@cluster0.kkybayr.mongodb.net/Xthreat');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export { connectDB };
