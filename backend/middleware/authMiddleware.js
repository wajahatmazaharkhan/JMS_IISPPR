import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Extract token
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.split(' ')[1]
      : authHeader;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // attach user info

    next();

  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default protect;