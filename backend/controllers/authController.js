import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// ================= REGISTER =================
export const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    // 1. Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Normalize input
    name = name.trim();
    email = email.trim().toLowerCase();

    // 2. Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // 3. Strong password validation 🔐
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'
      });
    }

    // ❌ Password should not contain name
    if (password.toLowerCase().includes(name.toLowerCase())) {
      return res.status(400).json({
        message: 'Password should not contain your name'
      });
    }

    // ❌ Password should not contain email
    if (password.toLowerCase().includes(email.toLowerCase())) {
      return res.status(400).json({
        message: 'Password should not contain your email'
      });
    }

    // 4. Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 5. Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // 6. FINAL ROLE (always author)
    const finalRole = 'author';

    // 7. Create user
    const user = new User({
      name,
      email,
      passwordHash,
      role: finalRole,
      mustChangePassword: false // normal users
    });

    await user.save();

    // 8. Remove sensitive data
    const userResponse = user.toObject();
    delete userResponse.passwordHash;

    res.status(201).json({
      message: 'User registered successfully',
      user: userResponse
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// ================= LOGIN =================
export const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    email = email.trim().toLowerCase();

    // 2. Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 🔐 Account active check
    if (!user.isActive) {
      return res.status(403).json({ message: 'Account is inactive' });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 4. Generate JWT
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role
      },
      process.env.JWT_SECRET || 'defaultsecret',
      { expiresIn: '1d' }
    );

    // 🔥 NEW: mustChangePassword check
    if (user.mustChangePassword) {
      return res.json({
        message: 'Password change required',
        token,
        mustChangePassword: true
      });
    }

    // 5. Remove password
    const userResponse = user.toObject();
    delete userResponse.passwordHash;

    res.json({
      message: 'Login successful',
      token,
      user: userResponse
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const changePassword = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { newPassword } = req.body;

    // 1. Validate
    if (!newPassword) {
      return res.status(400).json({ message: 'New password is required' });
    }

    // 2. Strong password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      return res.status(400).json({
        message:
          'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'
      });
    }

    // 3. Hash new password
    const passwordHash = await bcrypt.hash(newPassword, 10);

    // 4. Update user
    await User.findByIdAndUpdate(userId, {
      passwordHash,
      mustChangePassword: false
    });

    res.json({ message: 'Password updated successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};