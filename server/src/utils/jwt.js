const jwt = require('jsonwebtoken');
const pool = require('../db');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.cookies?.token || req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const [rows] = await pool.query('SELECT id, email, nombre, apellido, role FROM users WHERE id = ?', [payload.id]);
    if (!rows.length) return res.status(401).json({ msg: 'Usuario no existe' });
    req.user = rows[0];
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token inválido' });
  }
};
