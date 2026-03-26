import User from '../models/User.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export const createUserByAdmin = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const creatorRole = req.user.role; // 🔥 who is creating

    // 1. Validation
    if (!name || !email || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // 2. Normalize
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // 3. Check existing user
    const existingUser = await User.findOne({ email: cleanEmail });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 🔥 4. ROLE HIERARCHY CHECK (CORE LOGIC)
    const roleMap = {
      admin: ['chief_editor', 'editor'],
      chief_editor: ['editor', 'reviewer'],
      editor: ['reviewer']
    };

    // If creator role not allowed OR trying to create invalid role
    if (!roleMap[creatorRole] || !roleMap[creatorRole].includes(role)) {
      return res.status(403).json({
        message: `As a ${creatorRole}, you are not allowed to create ${role}`
      });
    }

    // 🔐 5. Generate temporary password
    const tempPassword = crypto.randomBytes(4).toString('hex');

    // 6. Hash password
    const passwordHash = await bcrypt.hash(tempPassword, 10);

    // 7. Create user
    const user = new User({
      name: cleanName,
      email: cleanEmail,
      passwordHash,
      role,
      mustChangePassword: true
    });

    await user.save();

    res.json({
      message: `${role} created successfully`,
      tempPassword // ⚠️ only for testing
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};