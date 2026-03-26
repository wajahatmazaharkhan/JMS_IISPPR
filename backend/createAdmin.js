import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@gmail.com' });

    if (existingAdmin) {
      console.log('Admin already exists');
      process.exit();
    }

    // Hash password
    const passwordHash = await bcrypt.hash('LDTPPR@123', 10);

    // Create admin
    const admin = new User({
      name: 'Admin',
      email: 'admin@gmail.com',
      passwordHash,
      role: 'admin',
      mustChangePassword: false
    });

    await admin.save();

    console.log('✅ Admin created successfully');
    console.log('Email: admin@gmail.com');
    console.log('Password: LDTPPR@123');

    process.exit();

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

createAdmin();